import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'

import { DARK_COLOR } from '../assets/colors'
import { BIG_TEXT_SIZE, STRONG_FONT } from '../assets/fonts'

const P = styled.p`
	color: ${DARK_COLOR};
	font-size: ${BIG_TEXT_SIZE};
	font-family: ${STRONG_FONT};
	font-weight: 700;
`

export default function Logo() {
	const { user } = useContext(UserContext)
	return (
		<Link to={user.email ? '/inicio' : '/ingresar'}>
			<P>Notes</P>
		</Link>
	)
}
