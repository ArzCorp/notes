import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'

import { DARK_COLOR, SECONDARY_COLOR } from '../../assets/colors'
import { SMALL_TEXT } from '../../assets/fonts'

import Button from '../Button'
import TextInput from '../TextInput'
import useRegister from '../../hooks/useRegister'
import { useNavigate } from 'react-router-dom'

const ErrorForm = styled.p`
	color: ${SECONDARY_COLOR};
	font-size: ${SMALL_TEXT};
	margin-top: 10px;
`

const ImageContainer = styled.div`
	width: 150px;
	color: transparent;
	overflow: hidden;
	height: 150px;
	position: relative;
	border: 1px solid ${DARK_COLOR};
	border-radius: 100%;
	margin: 0px auto;
	margin-bottom: 20px;
`

const InputFile = styled.input`
	cursor: pointer;
	position: relative;
	z-index: 50;
`

const Icon = styled.i`
	position: absolute;
	z-index: 5;
	top: calc(50% - 20px);
	left: calc(50% - 20px);
	font-size: 40px;
	color: ${DARK_COLOR};
`

const UserImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 10;
	border-radius: 100%;
	object-fit: cover;
	width: 100%;
	height: 100%;
`

export default function SignInForm() {
	const navigate = useNavigate()
	const file = useRef()
	const [image, setImage] = useState('')
	const { error, register } = useRegister({
		onSubmit: () => {
			handleReset()
			navigate('/ingresar')
		},
	})
	const {
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset,
	} = useFormik({
		onSubmit: (data) => {
			register({
				...data,
				userImage: image,
			})
		},
		initialValues: {
			name: '',
			userName: '',
			password: '',
			email: '',
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required('Campo requerido'),
			password: Yup.string()
				.min(8, 'Mínimo 8 caracteres')
				.required('Campo requerido'),
			userName: Yup.string()
				.min(6, 'Mínimo 6 caracteres')
				.required('Campo requerido'),
			email: Yup.string().email('Correo no válido').required('Campo requerido'),
		}),
	})

	const handleFile = (e) => {
		e.preventDefault()
		const dataFile = file.current.files[0]
		var reader = new FileReader()

		reader.onloadend = function () {
			setImage(reader.result)
		}

		if (dataFile) return reader.readAsDataURL(dataFile)
	}

	return (
		<form onSubmit={handleSubmit}>
			<ImageContainer>
				<InputFile
					ref={file}
					type="file"
					name="userImage"
					id="image"
					onChange={handleFile}
				/>
				<Icon className="fas fa-camera" />
				<UserImage src={image} alt="profile" />
			</ImageContainer>
			<TextInput
				label="Nombre:"
				name="name"
				id="name"
				onKeyDown={handleBlur}
				value={values.name}
				error={errors.name && touched.name ? errors.name : null}
				onChange={handleChange}
			/>
			<TextInput
				label="Usuario:"
				id="userName"
				onKeyDown={handleBlur}
				name="userName"
				value={values.userName}
				error={errors.userName && touched.userName ? errors.userName : null}
				onChange={handleChange}
			/>
			<TextInput
				label="Correo electrónico:"
				name="email"
				id="email"
				onKeyDown={handleBlur}
				value={values.email}
				error={errors.email && touched.email ? errors.email : null}
				onChange={handleChange}
			/>
			<TextInput
				label="Contraseña:"
				type="password"
				id="password"
				onKeyDown={handleBlur}
				name="password"
				value={values.password}
				error={errors.password && touched.password ? errors.password : null}
				onChange={handleChange}
			/>
			<Button type="submit">Crear cuenta</Button>
			{error ? <ErrorForm>{error}</ErrorForm> : null}
		</form>
	)
}
