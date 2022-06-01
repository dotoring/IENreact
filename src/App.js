import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleListPage from './components/pages/ArticleListPage';
import ArticlePage from './components/pages/ArticlePage';
import ArticleContainer from './containers/ArticleContainer';

const App = () => {
  return (
    <Routes>
      {/* <Route element={<ArticleListPage />} path="/" /> */}
      <Route element={<ArticlePage />} path="/article" />
      <Route element={<ArticleContainer />} path="/" />
    </Routes>
  );
};

export default App;