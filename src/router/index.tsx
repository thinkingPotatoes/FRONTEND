import Home from '../pages/Home.tsx';
import Blog from '../pages/Blog.tsx';
import Setting from '../pages/Setting-page/Setting.tsx';
import MyInfo from '../pages/Setting-page/MyInfo.tsx';
import ServiceInfo from '../pages/Setting-page/ServiceInfo.tsx';
import PrivateInfo from '../pages/Setting-page/PrivateInfo.tsx';

export const commonRouter = [
  { path: '/', element: <Home /> },
  { path: '/setting', element: <Setting /> },
  { path: '/setting-info', element: <MyInfo /> },
  { path: '/setting/service-info', element: <ServiceInfo /> },
  { path: '/setting/private-info', element: <PrivateInfo /> },
];

export const publicRouter = [];

export const privateRouter = [{ path: '/blog', element: <Blog /> }];
