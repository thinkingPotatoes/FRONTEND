import Home from '../pages/Home.tsx';
import Blog from '../pages/Blog.tsx';
import SearchPage from '../pages/SearchPage.tsx';

export const commonRouter = [
  { path: '/', element: <Home /> },
  { path: '/search', element: <SearchPage /> },
];

export const publicRouter = [];

export const privateRouter = [{ path: '/blog', element: <Blog /> }];
