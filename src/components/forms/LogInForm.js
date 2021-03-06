import React from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import styled from 'styled-components'
import useLogin from '../../hooks/useLogin'

import { DARK_COLOR, SECONDARY_COLOR } from '../../assets/colors'
import { NORMAL_TEXT_SIZE, SMALL_TEXT_SIZE } from '../../assets/fonts'

import Button from '../Button'
import TextInput from '../TextInput'

const ErrorForm = styled.p`
	color: ${SECONDARY_COLOR};
	font-size: ${SMALL_TEXT_SIZE};
	margin-top: 10px;
`
const Register = styled.p`
	font-size ${NORMAL_TEXT_SIZE};
	color: ${DARK_COLOR};
	text-align: center;
	margin-top: 10px;
`

export default function LogInForm() {
	const navigate = useNavigate()
	const { error, logIn } = useLogin({
		onSubmit: () => {
			handleReset()
			navigate('/inicio')
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
			logIn(data)
		},
		initialValues: {
			password: '',
			email: '',
		},
		validationSchema: Yup.object().shape({
			password: Yup.string().required('Campo requerido'),
			email: Yup.string().email('Correo no válido').required('Campo requerido'),
		}),
	})
	return (
		<form onSubmit={handleSubmit}>
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
			<Button type="submit">Iniciar sesión</Button>
			{error ? <ErrorForm>{error}</ErrorForm> : null}
			<Link to="/registro">
				<Register>Crear cuenta</Register>
			</Link>
		</form>
	)
}
