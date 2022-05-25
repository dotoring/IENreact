import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleListPage from './components/pages/ArticleListPage';

const App = () => {
  return (
    <Routes>
      <Route element={<ArticleListPage />} path="/" />
    </Routes>
  );
};

export default App;