import React from 'react'
import TextInput from '../TextInput'

export default function SignInForm() {
	return (
		<form>
			<TextInput label="Nombre:" />
			<TextInput label="Usuario:" />
			<TextInput label="Correo electrónico:" />
			<TextInput label="Contraseña:" type="password" />
		</form>
	)
}
