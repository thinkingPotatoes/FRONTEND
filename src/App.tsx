import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { commonRouter, privateRouter, publicRouter } from './router/index.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  // Todo 이국신: 로그인 구현 이후 변경 필요
  const isLogin = false;

  const protectedRouter = isLogin ? privateRouter : publicRouter;
  const router = createBrowserRouter([...commonRouter, ...protectedRouter]);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
