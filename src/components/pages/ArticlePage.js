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
	p {
		padding: 10px;
		font-size: 14pt;
	}
`

const ArticleButtons = styled.div`
	margin-inline: 2%;
	display: flex;
	justify-content: space-between;
`

const ArticlePage = () => {
	const {type, id} = useParams();
	const {articles} = useStore();
	const {economy, culture, society, sports, entertain, politic, IT} = articles;
	let findArticle
	switch (type) {
		case '0':
			findArticle = economy.find((article) => {
				return article._id.$oid === id
			});
			break;
		case '1':
			findArticle = culture.find((article) => {
				return article._id.$oid === id
			});
			break;
		case '2':
			findArticle = society.find((article) => {
				return article._id.$oid === id
			});
			break;
		case '3':
			findArticle = sports.find((article) => {
				return article._id.$oid === id
			});
			break;
		case '4':
			findArticle = entertain.find((article) => {
				return article._id.$oid === id
			});
			break;
		case '5':
			findArticle = politic.find((article) => {
				return article._id.$oid === id
			});
			break;
		case '6':
			findArticle = IT.find((article) => {
				return article._id.$oid === id
			});
			break;
		default:
	}

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