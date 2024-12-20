import Home from '@/pages/home';
import Profile from './pages/profile';
import NotFoundPage from './pages/not-found';
import Gallery from './pages/gallery';
import ProductList from './pages/product-list';
import Kontak from './pages/kontak';
import Product from './pages/product';
import KegiatanList from './pages/kegiatan-list';

import Dashboard from './pages/dashboard';
import ProductDashboard from './pages/dashboard/product-dashboard';
import UsersDashboard from './pages/dashboard/users-dashboard';
import BlogDashboard from './pages/dashboard/blog-dashboard';
import GaleriDashboard from './pages/dashboard/galeri-dashboard';

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
    path: "/produk",
    element: <ProductList />
  },
  {
    path: "/produk/:produkId",
    element: <Product />
  },
  {
    path: "/kegiatan",
    element: <KegiatanList />
  },
  {
    path: "/kontak",
    element: <Kontak />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },

  {
    path: "/dashboard/product",
    element: <ProductDashboard />
  },

  {
    path: "/dashboard/users",
    element: <UsersDashboard />
  },

  {
    path: "/dashboard/blog",
    element: <BlogDashboard />
  },

  {
    path: "/dashboard/galeri",
    element: <GaleriDashboard />
  },

  {
    path: "*",
    element: <NotFoundPage />
  }
])

export default router;
