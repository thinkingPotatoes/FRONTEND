import Home from '../pages/Home.tsx';
import Blog from '../pages/Blog.tsx';
import Setting from '../pages/Setting-page/Setting.tsx';
import MyInfo from '../pages/Setting-page/MyInfo.tsx';
import ServiceInfo from '../pages/Setting-page/ServiceInfo.tsx';
import PrivateInfo from '../pages/Setting-page/PrivateInfo.tsx';
import OpensourceInfo from '../pages/Setting-page/OpensouceInfo.tsx';
import NewIssue from '../pages/Setting-page/NewIssue.tsx';

export const commonRouter = [
  { path: '/', element: <Home /> },
  { path: '/setting', element: <Setting /> },
  { path: '/setting-info', element: <MyInfo /> },
  { path: '/setting/service-info', element: <ServiceInfo /> },
  { path: '/setting/private-info', element: <PrivateInfo /> },
  { path: '/setting/opensource-info', element: <OpensourceInfo /> },
  { path: '/setting/issue-info', element: <NewIssue /> },
];

export const publicRouter = [];

export const privateRouter = [{ path: '/blog', element: <Blog /> }];
