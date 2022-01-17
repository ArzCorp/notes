import React from 'react'
import styled from 'styled-components'
import { WHITE_COLOR } from '../assets/colors'

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
	return (
		<>
			<Header />
			<Container>
				<LogInForm />
			</Container>
		</>
	)
}
