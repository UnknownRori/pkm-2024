import Home from '@/pages/home';
import Profile from './pages/profile';
import NotFoundPage from './pages/not-found';
import Gallery from './pages/gallery';

import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },

  {
    path: "*",
    element: <NotFoundPage />
  }
])

export default router;
