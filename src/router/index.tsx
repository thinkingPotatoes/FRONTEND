import Home from '../pages/Home.tsx';
import Blog from '../pages/Blog.tsx';
import ReviewDetail from '../pages/ReviewDetail.tsx';

export const commonRouter = [
  { path: '/', element: <Home /> },
  { path: '/review/:id', element: <ReviewDetail /> },
];

export const publicRouter = [];

export const privateRouter = [{ path: '/blog', element: <Blog /> }];
