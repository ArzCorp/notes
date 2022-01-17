import React from 'react'
import styled from 'styled-components'

import useUser from '../hooks/useUser'
import AddCommentForm from './forms/AddCommentForm'

const Container = styled.div`
	width: 500px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	gap: 20px;
	padding: 20px 40px;
	background-color: white;
	margin: 0px auto;
`

const Img = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	object-fit: cover;
`

export default function newComment({ handleSubmit }) {
	const { user } = useUser()

	return (
		<Container>
			<Img src={user.userImage} alt={user.userName} />
			<AddCommentForm onSubmit={handleSubmit} />
		</Container>
	)
}
