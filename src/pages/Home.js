import React from 'react'
import styled from 'styled-components'

import { WHITE_COLOR } from '../assets/colors'

import Header from '../components/Header'
import Comments from '../components/Comments'
import NewComment from '../components/NewComment'

const Container = styled.div`
	height: calc(100vh - 60px);
	display: ${(props) => (props.row ? 'block' : 'flex')};
	align-items: center;
	justify-content: center;
	background-color: ${WHITE_COLOR};
`

export default function Home() {
	return (
		<>
			<Header />
			<Container row>
				<Comments />
				<NewComment />
			</Container>
		</>
	)
}
