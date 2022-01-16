import { useState } from 'react'
import useLocalStorage from './useLocalStorage'
import useUser from './useUser'

export default function useLogin({ onSubmit }) {
	const [error, setError] = useState('')
	const { storage } = useLocalStorage({ key: 'users' })
	const { setUser } = useUser()

	const logIn = (data) => {
		setError('')
		const email = storage.find((user) => user.email === data.email)
		const password = storage.find((user) => user.password === data.password)

		if (!email || !password) return setError('Datos proporcionados incorrectos')
		setUser(email)
		if (onSubmit) return onSubmit()
	}

	return { error, logIn }
}
