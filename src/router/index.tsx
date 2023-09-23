import Blog from '../pages/Blog.tsx';
import EmailCheck from '../pages/EmailCheck.tsx';
import Home from '../pages/Home.tsx';
import MovieSearch from '../pages/MovieSearch.tsx';
import PostReview from '../pages/PostReview.tsx';
import PostReviewOption from '../pages/PostReviewOption.tsx';
import PostReviewRequired from '../pages/PostReviewRequired.tsx';
import RegisterPasswordInputPage from '../pages/RegisterPasswordInputPage.tsx';
import SearchPage from '../pages/SearchPage.tsx';
import SelectMovie from '../pages/SelectMovie.tsx';
import RegisterSuccess from '../pages/RegisterSuccess.tsx';
import MovieTasteSelection from '../pages/MovieTasteSelection.tsx';
import Redirect from '../pages/Redirect.tsx';
import Login from '../pages/Login.tsx';
import LoginEamilInputPage from '../pages/LoginEamilInputPage.tsx';
import LoginPasswordInputPage from '../pages/LoginPasswordInputPage.tsx';

export const commonRouter = [
  { path: '/', element: <Login /> },
  { path: '/home', element: <Home /> },
  { path: '/moviesearch', element: <MovieSearch /> },
  { path: '/search', element: <SearchPage /> },
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
  { path: '/review', element: <SelectMovie /> },
  { path: '/review/:id', element: <PostReview /> },
  { path: '/review/:id/required', element: <PostReviewRequired /> },
  { path: '/review/:id/option', element: <PostReviewOption /> },
];
