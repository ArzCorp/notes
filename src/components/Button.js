import React from 'react'
import styled from 'styled-components'
import { DARK_COLOR, PRIMARY_LIGHT_COLOR } from '../assets/colors'
import { NORMAL_TEXT_SIZE } from '../assets/fonts'

const ButtonStyles = styled.button`
	width: 100%;
	max-width: 280px;
	padding: 10px 20px;
	color: ${DARK_COLOR};
	border: 1px solid ${DARK_COLOR};
	border-radius: 10px;
	background-color: ${PRIMARY_LIGHT_COLOR};
	font-size: ${NORMAL_TEXT_SIZE};
  font-weight: 700;
	cursor: pointer;
  transition: 0.2s ease-out;
  will-change: auto;

	&:hover {
		color ${PRIMARY_LIGHT_COLOR};
    background-color: ${DARK_COLOR};
	}
`

export default function Button(props) {
	return <ButtonStyles {...props} />
}
