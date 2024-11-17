import Home from '@/pages/home';
import NotFoundPage from './pages/not-found';
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <NotFoundPage />
  }
])

export default router;
