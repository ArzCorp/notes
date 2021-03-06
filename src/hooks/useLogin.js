import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import useLocalStorage from './useLocalStorage'

export default function useLogin({ onSubmit }) {
	const { storage } = useLocalStorage('users')
	const [error, setError] = useState('')
	const { dispatch } = useContext(UserContext)

	const logIn = (data) => {
		setError('')
		const email = storage.find((user) => user.email === data.email)
		const password = storage.find((user) => user.password === data.password)

		if (!email || !password) return setError('Datos proporcionados incorrectos')
		dispatch({ type: 'user/logIn', payload: email })
		if (onSubmit) return onSubmit()
	}

	return { error, logIn }
}
