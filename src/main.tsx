import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  /*
    Todo 이국신: Swiper와의 충돌로 StrictMode를 꺼둠.
    Swiper를 구현하거나 대체해야할듯으로 보임
  */
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
