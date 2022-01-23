import React, { useContext } from 'react'
import { CommentsContext } from '../context/CommentsContext'
import styled from 'styled-components'
import { DARK_COLOR, PRIMARY_COLOR } from '../assets/colors'
import { BIG_TEXT_SIZE, SMALL_TEXT_SIZE } from '../assets/fonts'

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
	font-size: ${SMALL_TEXT_SIZE};
	font-weight: 700;
`

const Date = styled.li`
	color: ${DARK_COLOR};
	font-size: ${SMALL_TEXT_SIZE};
	font-weight: 400;
`

const CommentContainer = styled.p`
	color: ${DARK_COLOR};
	word-break: break-word;
	font-size: ${BIG_TEXT_SIZE};
	font-weight: 400;
	margin-top: 10px;
`
const Icon = styled.i`
	color: ${DARK_COLOR};
	font-size: ${BIG_TEXT_SIZE};
	cursor: pointer;
	transform: all;
	transition: 2s;
	&:hover {
		color: ${PRIMARY_COLOR};
	}
`

export default function newComment({ comment }) {
	const { dispatch } = useContext(CommentsContext)
	return (
		<Container>
			<UserData>
				<DataImage>
					<Image src={comment.ownerImage} alt={comment.commentOwner} />
				</DataImage>
				<UserName>{comment.commentOwner}</UserName>
				<Date>{comment.date}</Date>
				<Icon
					className="fas fa-trash-alt"
					onClick={() => dispatch({ type: 'comment/remove', payload: comment })}
				/>
				<Icon
					className="fas fa-pencil-alt"
					onClick={() =>
						dispatch({ type: 'comment/selected', payload: comment })
					}
				/>
			</UserData>
			<CommentContainer>{comment.message}</CommentContainer>
		</Container>
	)
}
