import React, { useContext } from 'react'
import styled from 'styled-components'
import { WHITE_COLOR } from '../assets/colors'

import { Navigate } from 'react-router-dom'
import LogInForm from '../components/forms/LogInForm'
import Header from '../components/Header'
import { UserContext } from '../context/UserContext'

const Container = styled.div`
	height: calc(100vh - 60px);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${WHITE_COLOR};
`

export default function LogIn() {
	const { user } = useContext(UserContext)
	console.log({ user })
	return (
		<>
			{user.userName ? <Navigate to="/inicio" /> : null}
			<Header />
			<Container>
				<LogInForm />
			</Container>
		</>
	)
}
