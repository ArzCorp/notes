import React from 'react'
import useUser from '../hooks/useUser'
import styled from 'styled-components'
import { WHITE_COLOR } from '../assets/colors'

import { Navigate } from 'react-router-dom'
import LogInForm from '../components/forms/LogInForm'
import Header from '../components/Header'

const Container = styled.div`
	height: calc(100vh - 60px);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${WHITE_COLOR};
`

export default function LogIn() {
	const { user } = useUser()
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
