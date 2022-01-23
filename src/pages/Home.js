import React, { useContext } from 'react'
import styled from 'styled-components'

import { WHITE_COLOR } from '../assets/colors'

import Header from '../components/Header'
import Comment from '../components/Comment'
import NewComment from '../components/NewComment'
import { Context } from '../context/CommentsContext'
import { BIG_TEXT_SIZE } from '../assets/fonts'

const Container = styled.div`
	height: calc(100vh - 60px);
	padding: 20px 0px;
	display: ${(props) => (props.row ? 'block' : 'flex')};
	align-items: center;
	justify-content: center;
	background-color: ${WHITE_COLOR};
`
const Comments = styled.div`
	height: calc(100vh - 180px);
	overflow: auto;
`

const P = styled.p`
	height: calc(100vh - 180px);
	text-align: center;
	font-size: ${BIG_TEXT_SIZE};
	font-weight: 700;
`

export default function Home() {
	const { comments, setComment } = useContext(Context)

	return (
		<>
			<Header />
			<Container row>
				{comments.length === 0 ? (
					<P>Agrega un nuevo comentario</P>
				) : (
					<Comments>
						{comments.map((comment) => (
							<Comment key={comment.id} comment={comment} />
						))}
					</Comments>
				)}
				<NewComment handleSubmit={setComment} />
			</Container>
		</>
	)
}
