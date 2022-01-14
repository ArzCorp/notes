import React from 'react'
import styled from 'styled-components'

import { DARK_COLOR } from '../assets/colors'
import { BIG_TEXT, STRONG_FONT } from '../assets/fonts'

const P = styled.p`
	color: ${DARK_COLOR};
	font-size: ${BIG_TEXT};
	font-family: ${STRONG_FONT};
	font-weight: 700;
`

export default function Logo() {
	return (
		<div>
			<P>Comment section</P>
		</div>
	)
}
