import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import useLogin from '../../hooks/useLogin'

import { SECONDARY_COLOR } from '../../assets/colors'
import { SMALL_TEXT } from '../../assets/fonts'

import Button from '../Button'
import TextInput from '../TextInput'

const ErrorForm = styled.p`
	color: ${SECONDARY_COLOR};
	font-size: ${SMALL_TEXT};
	margin-top: 10px;
`

export default function LogInForm() {
	const { error, logIn } = useLogin({
		onSubmit: () => {
			handleReset()
			console.info('Registro con exito')
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
			password:
				Yup.string()
				.required('Campo requerido'),
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
		</form>
	)
}
