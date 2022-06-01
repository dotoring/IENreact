import React from 'react';
import Header from '../common/Header';
import styled from 'styled-components';
import palette from '../../style/palette';
import testImg from '../../img/당근.png';


const ArticleListArea = styled.div`
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
`

const ArticleBox = styled.div`
  list-style: none;
  margin: 0.5%;
  background-color: ${palette.gray[0]};
  box-shadow: 3px 3px 3px 3px ${palette.gray[5]};
  padding: 15px;
  /* max-width: 550px; */
  width: 30%;
  min-width: 400px;
  @media (max-width: 1385px) {
    /* max-width: 550px; */
    width: 45%;
    min-width: 400px;
  }
  @media (max-width: 800px) {
    /* max-width: 550px; */
    width: 80%;
    min-width: 400px;
  }
  height: 80px;
  display: flex;
	justify-content: space-between;
`

const Thumbnail = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
`

const Title = styled.h2`
  margin-block: 2px;
  margin-left: 10px;
`

const ArticleListPage = ({article}) => {
  function articleClick(e) {
    window.location.href="/article"
  }

  const { economy } = article;

  console.log(economy[0]);

  // var atitle = economy[0].title
  // var thumb = economy[0].img

  return (
    <div>
      <Header />
      <ArticleListArea>
        <ArticleBox onClick={articleClick}>
					<Thumbnail src={testImg} alt='test' />
          <Title>기사제목1</Title>
          <button>플레이</button>
        </ArticleBox>
        <ArticleBox onClick={articleClick}>
					<Thumbnail src={testImg} alt='test' />
          <Title>기사제목2</Title>
          <button>플레이</button>
        </ArticleBox>
        <ArticleBox onClick={articleClick}>
					<Thumbnail src={testImg} alt='test' />
          <Title>기사제목3</Title>
          <button>플레이</button>
        </ArticleBox>
        <ArticleBox onClick={articleClick}>
					<Thumbnail src={testImg} alt='test' />
          <Title>기사제목4</Title>
          <button>플레이</button>
        </ArticleBox>
        <ArticleBox onClick={articleClick}>
					<Thumbnail src={testImg} alt='test' />
          <Title>기사제목5</Title>
          <button>플레이</button>
        </ArticleBox>
        <ArticleBox onClick={articleClick}>
					<Thumbnail src={testImg} alt='test' />
          <Title>기사제목6</Title>
          <button>플레이</button>
        </ArticleBox>
        <ArticleBox onClick={articleClick}>
					<Thumbnail src={testImg} alt='test' />
          <Title>기사제목7</Title>
          <button>플레이</button>
        </ArticleBox>
        <ArticleBox onClick={articleClick}>
					<Thumbnail src={testImg} alt='test' />
          <Title>기사제목8</Title>
          <button>플레이</button>
        </ArticleBox>
      </ArticleListArea>
    </div>
  );
};

export default ArticleListPage;