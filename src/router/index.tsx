import Home from '../pages/Home.tsx';
import Blog from '../pages/Blog.tsx';
import Setting from '../pages/Setting.tsx';

export const commonRouter = [
  { path: '/', element: <Home /> },
  { path: '/setting', element: <Setting /> },
];

export const publicRouter = [];

export const privateRouter = [{ path: '/blog', element: <Blog /> }];
