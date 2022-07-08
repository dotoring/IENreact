import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import styled from 'styled-components';
import palette from '../../style/palette';

const ArticleListArea = styled.div`
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
`

const ArticleLink = styled(Link)`
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
  width: 93px;
  /* width: auto; */
  height: 100%;
  object-fit: contain;
`

const Title = styled.h2`
  margin-block: 2px;
  margin-left: 10px;
`

const ArticleListPage = ({article}) => {
  const [loading, setLoading] = useState(true);

  const { economy, global, culture, society, sports, entertain, politic, IT } = article;


  useEffect(() => {
    if(economy.length > 0) {
      setLoading(false);
    }
  }, [economy])

  if (loading) return <div>Loading...</div>
  return (
    <div>
      <Header />
      <ArticleListArea>
        {economy.map(a => (
          <Article articles={a} key={a._id.$oid} type='0'></Article>
        ))}
      </ArticleListArea>
      <ArticleListArea>
        {global.map(a => (
          <Article articles={a} key={a._id.$oid} type='1'></Article>
        ))}
      </ArticleListArea>
      <ArticleListArea>
        {culture.map(a => (
          <Article articles={a} key={a._id.$oid} type='2'></Article>
        ))}
      </ArticleListArea>
      <ArticleListArea>
        {society.map(a => (
          <Article articles={a} key={a._id.$oid} type='3'></Article>
        ))}
      </ArticleListArea>
      <ArticleListArea>
        {sports.map(a => (
          <Article articles={a} key={a._id.$oid} type='4'></Article>
        ))}
      </ArticleListArea>
      <ArticleListArea>
        {entertain.map(a => (
          <Article articles={a} key={a._id.$oid} type='5'></Article>
        ))}
      </ArticleListArea>
      <ArticleListArea>
        {politic.map(a => (
          <Article articles={a} key={a._id.$oid} type='6'></Article>
        ))}
      </ArticleListArea>
      <ArticleListArea>
        {IT.map(a => (
          <Article articles={a} key={a._id.$oid} type='7'></Article>
        ))}
      </ArticleListArea>
    </div>
  );
};

function Article(props) {
  return(
    <ArticleLink to={`/article/${props.type}/${props.articles._id.$oid}`}>
      <Thumbnail src={props.articles.img} alt='img' />
      <Title>{props.articles.title}</Title>
      <button>플레이</button>
    </ArticleLink>
    )
}

export default ArticleListPage;