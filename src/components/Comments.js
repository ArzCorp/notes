import React from 'react'
import styled from 'styled-components'

import useComments from '../hooks/useComments'
import Comment from './Comment'

const Container = styled.div`
	padding: 20px 0px;
`

export default function Comments() {
	const { comments } = useComments({})
	return (
		<Container>
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</Container>
	)
}
