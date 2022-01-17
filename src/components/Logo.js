import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useUser from '../hooks/useUser'

import { DARK_COLOR } from '../assets/colors'
import { BIG_TEXT, STRONG_FONT } from '../assets/fonts'

const P = styled.p`
	color: ${DARK_COLOR};
	font-size: ${BIG_TEXT};
	font-family: ${STRONG_FONT};
	font-weight: 700;
`

export default function Logo() {
	const { user } = useUser()
	return (
		<Link to={user.email ? '/inicio' : '/ingresar'}>
			<P>Comment section</P>
		</Link>
	)
}
