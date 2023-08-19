import { RouterProvider } from 'react-router-dom';
import Router from './router';

const App = () => {
  const { logoutRouter } = Router();
  return <RouterProvider router={logoutRouter} />;
};

export default App;
