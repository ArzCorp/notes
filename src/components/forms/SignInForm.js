import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useLocalStorage from '../../hooks/useLocalStorage'

import Button from '../Button'
import TextInput from '../TextInput'

export default function SignInForm() {
	const { setStorage } = useLocalStorage({ key: 'users' })
	const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
		useFormik({
			onSubmit: (data) => setStorage(data),
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
				email: Yup.string()
					.email('Correo no válido')
					.required('Campo requerido'),
			}),
		})
	return (
		<form onSubmit={handleSubmit}>
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
		</form>
	)
}
