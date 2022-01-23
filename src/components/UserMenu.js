import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/UserContext'

import { SMALL_TEXT_SIZE } from '../assets/fonts'
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
	font-size: ${SMALL_TEXT_SIZE};
	color: ${DARK_COLOR};
	margin-bottom: 10px;
	&:hover {
		text-decoration: underline;
	}
`

export default function UserMenu() {
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)
	const { user, dispatch } = useContext(Context)
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
				<DropdownItem
					className="dropdown-item"
					onClick={() => {
						navigate('/ingresar')
						dispatch({ type: 'user/logOut' })
					}}
				>
					Cerrar sesión
				</DropdownItem>
				<DropdownItem
					className="dropdown-item"
					onClick={() => navigate('/configuracion')}
				>
					Configuraciones
				</DropdownItem>
			</Dropdown>
		</Container>
	)
}
