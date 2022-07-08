import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticlePage from './components/pages/ArticlePage';
import ArticleContainer from './containers/ArticleContainer';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <Routes>
      {/* <Route element={<ArticleListPage />} path="/" /> */}
      <Route element={<ArticleContainer />} path="/" />
      <Route path="/article/:type/:id" element={<ArticlePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;