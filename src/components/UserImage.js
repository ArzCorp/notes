import React, { useState } from 'react'
import styled from 'styled-components'
import useLocalStorage from '../hooks/useLocalStorage'

import { SMALL_TEXT } from '../assets/fonts'
import { DARK_COLOR, WHITE_COLOR } from '../assets/colors'

const Container = styled.div`
	position: relative;
	width: 40px;
	height: 40px;
	cursor: pointer;
	border-radius: 100%;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100%;
`
const Dropdown = styled.ul`
	display: ${(props) => (props.open ? 'block' : 'none')};
	height: 60px;
	padding: 10px 20px;
	background-color: ${WHITE_COLOR};
	border: 1px solid ${DARK_COLOR};
	border-radius: 10px;
	position: absolute;
	bottom: -65px;
	left: -93px;
`

const DropdownItem = styled.ul`
	font-size: ${SMALL_TEXT};
	color: ${DARK_COLOR};
	margin-bottom: 10px;
	&:hover {
		text-decoration: underline;
	}
`

export default function UserImage() {
	const [open, setOpen] = useState(false)
	const { storage: user, cleanStorage } = useLocalStorage({ key: 'user' })

	return (
		<Container className="container-dropdown" onClick={() => setOpen(!open)}>
			<Image
				src={
					user.userImage ||
					'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600124/59070205-user-icon-man-profile-businessman-avatar-person-icon-in-vector-illustration.jpg?ver=6'
				}
				alt="usuario"
			/>
			<Dropdown className="dropdown" open={open}>
				<DropdownItem className="dropdown-item" onClick={() => cleanStorage()}>
					Cerrar sesión
				</DropdownItem>
				<DropdownItem
					className="dropdown-item"
					onClick={() => console.log('click 2')}
				>
					Configuraciones
				</DropdownItem>
			</Dropdown>
		</Container>
	)
}
