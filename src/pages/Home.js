import React from 'react'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import useUser from '../hooks/useUser'

import { WHITE_COLOR } from '../assets/colors'

import Header from '../components/Header'
import Comment from '../components/Comment'
import NewComment from '../components/NewComment'
import useComments from '../hooks/useComments'

const Container = styled.div`
	height: calc(100vh - 60px);
	padding: 20px 0px;
	display: ${(props) => (props.row ? 'block' : 'flex')};
	align-items: center;
	justify-content: center;
	background-color: ${WHITE_COLOR};
`

export default function Home() {
	const { comments, getComments } = useComments({})

	return (
		<>
			<Header />
			<Container row>
				{comments.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
				<NewComment handleSubmit={getComments} />
			</Container>
		</>
	)
}
