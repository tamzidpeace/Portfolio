import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPost from './BlogPost.tsx';

const manifest = [
  {
    slug: 'welcome-to-my-blog',
    title: 'Welcome to My Blog',
    date: '2026-06-21',
    excerpt: 'A short intro.',
    tags: ['general'],
    file: '/blogs/welcome-to-my-blog.md',
    readingTime: '2 min',
  },
  {
    slug: 'what-is-the-zend-engine',
    title: 'Zend Engine কী: PHP কোড আসলে কীভাবে চলে?',
    date: '2026-07-18',
    excerpt: 'Zend Engine কীভাবে PHP কোডকে token, AST ও opcode হয়ে execute করে তা জানুন।',
    tags: ['php', 'zend-engine', 'internals'],
    file: '/blogs/zend-engine/bn.md',
    readingTime: '7 min',
    translations: {
      bn: {
        title: 'Zend Engine কী: PHP কোড আসলে কীভাবে চলে?',
        excerpt: 'Zend Engine কীভাবে PHP কোডকে token, AST ও opcode হয়ে execute করে তা জানুন।',
        file: '/blogs/zend-engine/bn.md',
      },
      en: {
        title: 'What Is the Zend Engine? How PHP Code Actually Runs',
        excerpt: 'Learn how the Zend Engine turns PHP code into tokens, an AST, opcodes, and output.',
        file: '/blogs/zend-engine/en.md',
      },
    },
  },
];

const md = '# Hello World\n\nThis is a test post with `code`.\n\n- one\n- two';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation((url: any) => {
    const s = String(url);
    if (s.endsWith('/blogs/manifest.json')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(manifest),
      } as Response);
    }
    if (s.endsWith('/blogs/welcome-to-my-blog.md')) {
      return Promise.resolve({
        ok: true,
        text: () => Promise.resolve(md),
      } as Response);
    }
    if (s.endsWith('/blogs/zend-engine/bn.md')) {
      return Promise.resolve({
        ok: true,
        text: () =>
          Promise.resolve(
            '# বাংলা Zend Engine\n\n![Bengali cover](/blogs/zend-engine/bn-cover.png)\n\n![Bengali creators](/blogs/zend-engine/bn-creators.png)\n\n![Bengali execution flow](/blogs/zend-engine/bn-execution-flow.png)'
          ),
      } as Response);
    }
    if (s.endsWith('/blogs/zend-engine/en.md')) {
      return Promise.resolve({
        ok: true,
        text: () =>
          Promise.resolve(
            '# English Zend Engine\n\n![English cover](/blogs/zend-engine/en-cover.png)\n\n![English creators](/blogs/zend-engine/en-creators.png)\n\n![English execution flow](/blogs/zend-engine/en-execution-flow.png)'
          ),
      } as Response);
    }
    return Promise.reject(new Error('unexpected fetch'));
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders a blog post by slug', async () => {
  render(
    <MemoryRouter initialEntries={['/blogs/welcome-to-my-blog']}>
      <Routes>
        <Route path="/blogs/:slug" element={<BlogPost />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText('Welcome to My Blog')).toBeInTheDocument();
  });
  expect(screen.getByText('Hello World')).toBeInTheDocument();
  expect(
    screen.getByText(
      (_, node) =>
        node?.tagName === 'P' &&
        node.textContent === 'This is a test post with code.'
    )
  ).toBeInTheDocument();
});

test('shows not-found for unknown slug', async () => {
  render(
    <MemoryRouter initialEntries={['/blogs/does-not-exist']}>
      <Routes>
        <Route path="/blogs/:slug" element={<BlogPost />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: /Post not found/i })).toBeInTheDocument();
  });
});

test('defaults a bilingual post to Bengali', async () => {
  render(
    <MemoryRouter initialEntries={['/blogs/what-is-the-zend-engine']}>
      <Routes>
        <Route path="/blogs/:slug" element={<BlogPost />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'বাংলা Zend Engine' })).toBeInTheDocument();
  });

  expect(screen.getByRole('button', { name: 'বাংলা' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('button', { name: 'English' })).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByRole('article')).toHaveAttribute('lang', 'bn');
  expect(global.fetch).toHaveBeenCalledWith('/blogs/zend-engine/bn.md');
  expect(screen.getByAltText('Bengali cover')).toHaveAttribute('src', '/blogs/zend-engine/bn-cover.png');
  expect(screen.getByAltText('Bengali creators')).toHaveAttribute('src', '/blogs/zend-engine/bn-creators.png');
  expect(screen.getByAltText('Bengali execution flow')).toHaveAttribute(
    'src',
    '/blogs/zend-engine/bn-execution-flow.png'
  );
});

test('switches a bilingual post to English', async () => {
  render(
    <MemoryRouter initialEntries={['/blogs/what-is-the-zend-engine']}>
      <Routes>
        <Route path="/blogs/:slug" element={<BlogPost />} />
      </Routes>
    </MemoryRouter>
  );

  await screen.findByRole('heading', { name: 'বাংলা Zend Engine' });
  fireEvent.click(screen.getByRole('button', { name: 'English' }));

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'English Zend Engine' })).toBeInTheDocument();
  });

  expect(screen.getByRole('button', { name: 'English' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('article')).toHaveAttribute('lang', 'en');
  expect(global.fetch).toHaveBeenCalledWith('/blogs/zend-engine/en.md');
  expect(screen.getByAltText('English cover')).toHaveAttribute('src', '/blogs/zend-engine/en-cover.png');
  expect(screen.getByAltText('English creators')).toHaveAttribute('src', '/blogs/zend-engine/en-creators.png');
  expect(screen.getByAltText('English execution flow')).toHaveAttribute(
    'src',
    '/blogs/zend-engine/en-execution-flow.png'
  );
});

test('does not show language controls for a legacy post', async () => {
  render(
    <MemoryRouter initialEntries={['/blogs/welcome-to-my-blog']}>
      <Routes>
        <Route path="/blogs/:slug" element={<BlogPost />} />
      </Routes>
    </MemoryRouter>
  );

  await screen.findByRole('heading', { name: 'Hello World' });

  expect(screen.queryByRole('button', { name: 'English' })).not.toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'বাংলা' })).not.toBeInTheDocument();
});
