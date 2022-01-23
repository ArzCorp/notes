import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'

import Logo from './Logo'
import UserMenu from './UserMenu'

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
	const { user } = useContext(UserContext)
	return (
		<Container>
			<Logo />
			{user.email ? <UserMenu /> : null}
		</Container>
	)
}
