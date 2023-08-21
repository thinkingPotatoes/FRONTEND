import Home from '../pages/Home.tsx';
import Blog from '../pages/Blog.tsx';

export const commonRouter = [{ path: '/', element: <Home /> }];

export const publicRouter = [];

export const privateRouter = [{ path: '/blog', element: <Blog /> }];
