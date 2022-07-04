import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../common/Header';
import styled from 'styled-components';
import { useStore } from '../common/store';

const ArticleArea = styled.div`
	background-color: whitesmoke;
	margin: 2%;
	padding: 2%;
	border-radius: 20px;
`

const TitleArea = styled.div`
	margin-right: 2%;
	margin-bottom: 1%;
	display: flex;
	justify-content: space-between;
`

const ContentArea = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`

const ArticleButtons = styled.div`
	margin-inline: 2%;
	display: flex;
	justify-content: space-between;
`

const ArticlePage = () => {
	const {id} = useParams();
	const {articles} = useStore();
	const {economy} = articles;
	let findArticle = economy.find((article) => {
		return article._id.$oid === id
	});
	return (
		<div>
			<Header />
			<ArticleArea>
				<TitleArea>
					<h1>{findArticle.title}</h1>
					<button>플레이</button>
				</TitleArea>
				<ContentArea>
					<img src={findArticle.img} alt='articleImg' />
					<p>{findArticle.contents}</p>
				</ContentArea>
			</ArticleArea>
			<ArticleButtons>
				<button>이전 기사</button>
				<button>다음 기사</button>
			</ArticleButtons>
		</div>
	);
};

export default ArticlePage;