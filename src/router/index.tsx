import Blog from '../pages/Blog.tsx';
import Home from '../pages/Home.tsx';
import MovieSearch from '../pages/MovieSearch.tsx';
import PostReview from '../pages/PostReview.tsx';
import PostReviewOption from '../pages/PostReviewOption.tsx';
import PostReviewRequired from '../pages/PostReviewRequired.tsx';
import SearchPage from '../pages/SearchPage.tsx';
import SelectMovie from '../pages/SelectMovie.tsx';

export const commonRouter = [
  { path: '/', element: <Home /> },
  { path: '/moviesearch', element: <MovieSearch /> },
  { path: '/search', element: <SearchPage /> },
];

export const publicRouter = [];

export const privateRouter = [
  { path: '/blog', element: <Blog /> },
  { path: '/review', element: <SelectMovie /> },
  { path: '/review/:id', element: <PostReview /> },
  { path: '/review/:id/required', element: <PostReviewRequired /> },
  { path: '/review/:id/option', element: <PostReviewOption /> },
];
