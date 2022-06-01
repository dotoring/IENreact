import React from 'react';
import Header from '../common/Header';
import styled from 'styled-components';
import testImg from '../../img/당근.png';

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
	.img {
		width: 1000px;
		height: 1000px;
	}
`

const ArticleButtons = styled.div`
	margin-inline: 2%;
	display: flex;
	justify-content: space-between;
`

const ArticlePage = () => {
	return (
		<div>
			<Header />
			<ArticleArea>
				<TitleArea>
					<h1>[취재파일] 충격과 공포를 넘어... '코로나 바이러스'를 생각한다.</h1>
					<button>플레이</button>
				</TitleArea>
				<ContentArea>
					<img src={testImg} alt='test' />
					<p>@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@@기사내용입니다.@</p>
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