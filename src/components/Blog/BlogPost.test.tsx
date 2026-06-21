import { render, screen, waitFor } from '@testing-library/react';
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
  expect(screen.getByText('This is a test post with')).toBeInTheDocument();
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
    expect(screen.getByText(/Post not found/i)).toBeInTheDocument();
  });
});
