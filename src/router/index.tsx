import Blog from '../pages/Blog.tsx';
import Home from '../pages/Home.tsx';
import MovieSearch from '../pages/MovieSearch.tsx';
import MovieSearchPlot from '../pages/MovieSearchPlot.tsx';

import PostReview from '../pages/PostReview.tsx';
import PostReviewOption from '../pages/PostReviewOption.tsx';
import PostReviewRequired from '../pages/PostReviewRequired.tsx';
import SearchPage from '../pages/SearchPage.tsx';
import SelectMovie from '../pages/SelectMovie.tsx';

import ReviewDetail from '../pages/ReviewDetail.tsx';
import ReviewDetailComment from '../pages/ReviewDetailComment.tsx';

export const commonRouter = [
  { path: '/', element: <Home /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/moviesearch/:id', element: <MovieSearch /> },
  { path: '/moviesearch/:id/plot', element: <MovieSearchPlot /> },
  { path: '/review/:id', element: <ReviewDetail /> },
  { path: '/review/:id/comment', element: <ReviewDetailComment /> },
];

export const publicRouter = [];

export const privateRouter = [
  { path: '/blog', element: <Blog /> },
  { path: '/review', element: <SelectMovie /> },
  { path: '/review/:id', element: <PostReview /> },
  { path: '/review/:id/required', element: <PostReviewRequired /> },
  { path: '/review/:id/option', element: <PostReviewOption /> },
];
