import React from 'react'
import styled from 'styled-components'

import {
	DARK_COLOR,
	PRIMARY_COLOR,
	PRIMARY_LIGHT_COLOR,
	SECONDARY_COLOR,
} from '../assets/colors'
import { NORMAL_TEXT, SMALL_TEXT } from '../assets/fonts'

const Container = styled.div`
	width: 100%;
	max-width: 280px;
	padding: 15px 20px;
	min-width: 250px;
	margin-bottom: 20px;
	border-radius: 10px;
	background-color: ${PRIMARY_LIGHT_COLOR};
	color: ${DARK_COLOR};
`
const Label = styled.label`
	font-size: ${NORMAL_TEXT};
	display: block;
	font-weight: 700;
	margin-bottom: 5px;
	margin-right: 5px;
`

const Input = styled.input.attrs((props) => ({
	type: props.type || 'text',
}))`
	width: 100%;
	padding: 5px 10px;
	outline: ${PRIMARY_COLOR};
	border: 1px solid ${DARK_COLOR};
	border-radius: 5px;
	font-size: ${NORMAL_TEXT};
`
const Error = styled.p`
	color: ${SECONDARY_COLOR};
	font-size: ${SMALL_TEXT};
	margin-top: 5px;
	display: ${(props) => (props.error ? 'block' : 'none')};
`
export default function TextInput({ error, label = 'Label:', id, ...props }) {
	return (
		<Container>
			<Label htmlFor={id}>{label}</Label>
			<Input id={id} {...props} />
			<Error error={error}>{error}</Error>
		</Container>
	)
}
