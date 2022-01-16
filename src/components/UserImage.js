import React from 'react'
import styled from 'styled-components'
import useLocalStorage from '../hooks/useLocalStorage'

const Container = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 100%;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100%;
`

export default function UserImage() {
	const { storage: user } = useLocalStorage({ key: 'user' })

	return (
		<Container>
			<Image
				src={
					user.userImage ||
					'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600124/59070205-user-icon-man-profile-businessman-avatar-person-icon-in-vector-illustration.jpg?ver=6'
				}
				alt="usuario"
			/>
		</Container>
	)
}
