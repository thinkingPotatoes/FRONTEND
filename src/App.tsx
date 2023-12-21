import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { commonRouter, privateRouter, publicRouter } from './router/index.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AccountProvider } from './context/AccountContext.tsx';

function App() {
  const isLogin = localStorage.getItem('ACCESS_TOKEN') ? true : false;

  const protectedRouter = isLogin ? privateRouter : publicRouter;
  const router = createBrowserRouter([...commonRouter, ...protectedRouter]);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AccountProvider>
        <RouterProvider router={router} />
      </AccountProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
