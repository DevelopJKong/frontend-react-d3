import { createBrowserRouter } from 'react-router-dom';
import TwoPage from './pages/two.page';
import MainPage from './pages/main.page';

const Router = () => {
  const logoutRouter = createBrowserRouter([
    {
      index: true,
      element: <MainPage />,
    },
    {
      path: 'two',
      element: <TwoPage />,
    },
  ]);
  return { logoutRouter };
};

export default Router;
