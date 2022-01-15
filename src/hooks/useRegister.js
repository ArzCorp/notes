import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useRegister({ onSubmit }) {
	const { storage, setStorage, getStorage } = useLocalStorage({ key: 'users' })
	const [error, setError] = useState('')

	const register = (data) => {
		const emailExist = storage.find(
			(user) => user.email.toLowerCase() === data.email.toLowerCase()
		)

		const userExist = storage.find(
			(user) => user.userName.toLowerCase() === data.userName.toLowerCase()
		)

		if (emailExist) return setError('Correo ya registrado.')
		if (userExist) return setError('Usuario no disponible.')
		setStorage(data)
		getStorage()
		if (onSubmit) return onSubmit()
	}

	return { error, register }
}