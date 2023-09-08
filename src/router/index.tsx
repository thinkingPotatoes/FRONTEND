import Home from '../pages/Home.tsx';
import Blog from '../pages/Blog.tsx';
import Setting from '../pages/Setting.tsx';
import MyInfo from '../pages/MyInfo.tsx';

export const commonRouter = [
  { path: '/', element: <Home /> },
  { path: '/setting', element: <Setting /> },
  { path: '/setting-info', element: <MyInfo /> },
];

export const publicRouter = [];

export const privateRouter = [{ path: '/blog', element: <Blog /> }];
