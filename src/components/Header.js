import React from 'react'
import styled from 'styled-components'
import useLocalStorage from '../hooks/useLocalStorage'
import Logo from './Logo'
import UserImage from './UserImage'

import { PRIMARY_LIGHT_COLOR } from '../assets/colors'

const Container = styled.div`
	height: 60px;
	padding: 0px 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${PRIMARY_LIGHT_COLOR};
`

export default function Header() {
	const { storage: user } = useLocalStorage({ key: 'user' })
	return (
		<Container>
			<Logo />
			{user.email ? <UserImage /> : null}
		</Container>
	)
}
