import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { commonRouter, privateRouter, publicRouter } from './router/index.tsx';

function App() {
  // Todo 이국신: 로그인 구현 이후 변경 필요
  const isLogin = false;

  const protectedRouter = isLogin ? privateRouter : publicRouter;
  const router = createBrowserRouter([...commonRouter, ...protectedRouter]);

  return <RouterProvider router={router} />;
}

export default App;
