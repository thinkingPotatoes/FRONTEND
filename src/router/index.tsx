import Blog from '../pages/Blog.tsx';
import EmailCheck from '../pages/EmailCheck.tsx';
import Home from '../pages/Home.tsx';
import MovieSearch from '../pages/MovieSearch.tsx';
import MovieSearchPlot from '../pages/MovieSearchPlot.tsx';

import PostReview from '../pages/PostReview.tsx';
import PostReviewOption from '../pages/PostReviewOption.tsx';
import PostReviewRequired from '../pages/PostReviewRequired.tsx';
import RegisterPasswordInputPage from '../pages/RegisterPassword.tsx';
import SearchPage from '../pages/SearchPage.tsx';
import SelectMovie from '../pages/SelectMovie.tsx';
import RegisterSuccess from '../pages/RegisterSuccess.tsx';
import MovieTasteSelection from '../pages/MovieTasteSelection.tsx';
import Redirect from '../pages/Redirect.tsx';
import Login from '../pages/Login.tsx';
import LoginEamilInputPage from '../pages/LoginEmail.tsx';
import LoginPasswordInputPage from '../pages/LoginPassword.tsx';

import ReviewDetail from '../pages/ReviewDetail.tsx';

export const commonRouter = [
  { path: '/', element: <Login /> },
  { path: '/home', element: <Home /> },
  { path: '/moviesearch', element: <MovieSearch /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/moviesearch/:id', element: <MovieSearch /> },
  { path: '/moviesearch/:id/plot', element: <MovieSearchPlot /> },
  { path: '/review/:id', element: <ReviewDetail /> },

  // 테스트 위해 임시 추가
  { path: '/blog', element: <Blog /> },
  { path: '/postreview', element: <SelectMovie /> },
  { path: '/postreview/:id', element: <PostReview /> },
  { path: '/postreview/:id/required', element: <PostReviewRequired /> },
  { path: '/postreview/:id/option', element: <PostReviewOption /> },
];

export const publicRouter = [
  {
    path: '/login/email',
    element: <LoginEamilInputPage />,
  },
  {
    path: 'login/password',
    element: <LoginPasswordInputPage />,
  },
  {
    path: '/register/password',
    element: <RegisterPasswordInputPage />,
  },
  {
    path: '/register/check',
    element: <EmailCheck />,
  },
  {
    path: '/register/success',
    element: <Redirect />,
  },
  {
    path: '/register/complete',
    element: <RegisterSuccess />,
  },
  {
    path: '/password/check',
    element: <EmailCheck />,
  },
  {
    path: '/register/select',
    element: <MovieTasteSelection />,
  },
];

export const privateRouter = [
  { path: '/blog', element: <Blog /> },
  { path: '/postreview', element: <SelectMovie /> },
  { path: '/postreview/:id', element: <PostReview /> },
  { path: '/postreview/:id/required', element: <PostReviewRequired /> },
  { path: '/postreview/:id/option', element: <PostReviewOption /> },
];
