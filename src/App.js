import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleListPage from './components/pages/ArticleListPage';
import ArticlePage from './components/pages/ArticlePage';

const App = () => {
  return (
    <Routes>
      <Route element={<ArticleListPage />} path="/" />
      <Route element={<ArticlePage />} path="/article" />
    </Routes>
  );
};

export default App;