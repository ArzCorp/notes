import React from 'react'
import styled from 'styled-components'
import { DARK_COLOR } from '../assets/colors'
import { NORMAL_TEXT, SMALL_TEXT } from '../assets/fonts'

const Container = styled.div`
	width: 500px;
	border-radius: 10px;
	gap: 20px;
	padding: 10px 20px;
	background-color: white;
	margin: 0px auto;
	margin-bottom: 20px;
`

const UserData = styled.ul`
	list-style: none;
	display: flex;
	gap: 10px;
	align-items: center;
`

const DataImage = styled.li`
	width: 30px;
	height: 30px;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 100%;
	object-fit: cover;
`

const UserName = styled.li`
	color: ${DARK_COLOR};
	font-size: ${SMALL_TEXT};
	font-weight: 700;
`

const Date = styled.li`
	color: ${DARK_COLOR};
	font-size: ${SMALL_TEXT};
	font-weight: 400;
`

const CommentContainer = styled.p`
	color: ${DARK_COLOR};
	word-break: break-word;
	font-size: ${NORMAL_TEXT};
	font-weight: 400;
	margin-top: 10px;
`

export default function newComment({ comment }) {
	return (
		<Container>
			<UserData>
				<DataImage>
					<Image src={comment.userImage} alt={comment.commentOwner} />
				</DataImage>
				<UserName>{comment.commentOwner}</UserName>
				<Date>{comment.date}</Date>
			</UserData>
			<CommentContainer>{comment.comment}</CommentContainer>
		</Container>
	)
}
