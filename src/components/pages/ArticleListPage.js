import React from 'react';
import Header from '../common/Header';
import styled from 'styled-components';
import palette from '../../style/palette';

const ArticleBox = styled.div`
  list-style: none;
  margin: 15px;
  background-color: ${palette.gray[0]};
  box-shadow: 3px 3px 3px 3px ${palette.gray[5]};
  padding: 2%;
  width: 200px;
`

const ArticleListPage = () => {
  return (
    <div>
      <Header />
      <h1>끼요옹</h1>
      <ArticleBox>
        끼요오옷
      </ArticleBox>
    </div>
  );
};

export default ArticleListPage;