import { createBrowserRouter } from 'react-router-dom';
import CirclePage from './pages/circle.page';
import MainPage from './pages/main.page';

const Router = () => {
  const logoutRouter = createBrowserRouter([
    {
      index: true,
      element: <MainPage />,
    },
    {
      path: 'circle',
      element: <CirclePage />,
    },
  ]);
  return { logoutRouter };
};

export default Router;
