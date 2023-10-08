import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../../Pages/Home/Home'));
const Catalog = lazy(() => import('../../Pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../../Pages/Favorites/Favorites'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};
