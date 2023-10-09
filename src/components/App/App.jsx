import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home/Home.jsx'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites.jsx'));

const App = () => {
  return (
    <>
      <SharedLayout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
