import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from './Blog.tsx';

const manifest = [
  {
    slug: 'welcome-to-my-blog',
    title: 'Welcome to My Blog',
    date: '2026-06-21',
    excerpt: 'A short intro.',
    tags: ['general', 'intro'],
    file: '/blogs/welcome-to-my-blog.md',
    readingTime: '2 min',
  },
  {
    slug: 'second-post',
    title: 'Second Post',
    date: '2026-06-19',
    excerpt: 'Another post.',
    tags: ['react'],
    file: '/blogs/second-post.md',
    readingTime: '3 min',
  },
];

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation((url: any) => {
    if (String(url).endsWith('/blogs/manifest.json')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(manifest),
      } as Response);
    }
    return Promise.reject(new Error('unexpected fetch'));
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders blog list from manifest', async () => {
  render(
    <MemoryRouter>
      <Blog />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText('Welcome to My Blog')).toBeInTheDocument();
  });
  expect(screen.getByText('Second Post')).toBeInTheDocument();
  const readMoreLinks = screen.getAllByRole('link', { name: /Read more/i });
  expect(readMoreLinks.length).toBeGreaterThan(0);
  expect(readMoreLinks[0]).toHaveAttribute('href', '/blogs/welcome-to-my-blog');
});

test('renders tag pills', async () => {
  render(
    <MemoryRouter>
      <Blog />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText('#general')).toBeInTheDocument();
  });
  expect(screen.getByText('#react')).toBeInTheDocument();
});
