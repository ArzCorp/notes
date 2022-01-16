import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useLogin({ onSubmit }) {
	const { storage, setUser } = useLocalStorage({ key: 'users' })

	const [error, setError] = useState('')

	const logIn = (data) => {
		const email = storage.find((user) => user.email === data.email)
		const password = storage.find((user) => user.password === data.password)

		if (!email || !password) return setError('Datos proporcionados incorrectos')
		setUser(email)
		if (onSubmit) return onSubmit()
	}

	return { error, logIn }
}
