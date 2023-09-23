import Home from '../pages/Home.tsx';
import Blog from '../pages/Blog.tsx';
import SearchPage from '../pages/SearchPage.tsx';

import ReviewDetail from '../pages/ReviewDetail.tsx';
import ReviewDetailComment from '../pages/ReviewDetailComment.tsx';

export const commonRouter = [
  { path: '/', element: <Home /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/review/:id', element: <ReviewDetail /> },
  { path: '/review/:id/comment', element: <ReviewDetailComment /> },
];

export const publicRouter = [];

export const privateRouter = [{ path: '/blog', element: <Blog /> }];
