import Home from '../pages/Home.tsx';
import Blog from '../pages/Blog.tsx';
import Login from '../pages/Login.tsx';
import LoginEamilInputPage from '../pages/LoginEamilInputPage.tsx';
import LoginPasswordInputPage from '../pages/LoginPasswordInputPage.tsx';
import EmailCheck from '../pages/EmailCheck.tsx';
import RegisterSuccess from '../pages/RegisterSuccess.tsx';
import RegisterEamilInputPage from '../pages/RegisterEamilInputPage.tsx';
import RegisterPasswordInputPage from '../pages/RegisterPasswordInputPage.tsx';
import Redirect from '../pages/Redirect.tsx';
import MovieTasteSelection from '../pages/MovieTasteSelection.tsx';

export const commonRouter = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/login/email',
    element: <LoginEamilInputPage />,
  },
  {
    path: '/login/password',
    element: <LoginPasswordInputPage />,
  },

  {
    path: '/register/email',
    element: <RegisterEamilInputPage />,
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

export const publicRouter = [{ path: '/home', element: <Home /> }];

export const privateRouter = [{ path: '/blog', element: <Blog /> }];
