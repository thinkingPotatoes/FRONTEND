import Blog from '../pages/Blog.tsx';
import Home from '../pages/Home.tsx';
import PostReview from '../pages/PostReview.tsx';

export const commonRouter = [{ path: '/', element: <Home /> }];

export const publicRouter = [];

export const privateRouter = [
  { path: '/blog', element: <Blog /> },
  { path: '/review/:id', element: <PostReview /> },
];
