import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import useLocalStorage from './useLocalStorage'

export default function useRegister({ onSubmit }) {
	const { storage } = useLocalStorage({ key: 'users' })
	const { dispatch } = useContext(UserContext)
	const [error, setError] = useState('')

	const register = (data) => {
		setError('')
		const emailExist = storage.find(
			(user) => user.email.toLowerCase() === data.email.toLowerCase()
		)

		const userExist = storage.find(
			(user) => user.userName.toLowerCase() === data.userName.toLowerCase()
		)

		if (emailExist) return setError('Correo ya registrado.')
		if (userExist) return setError('Usuario no disponible.')
		dispatch({
			type: 'user/add',
			payload: {
				id: 1,
				...data,
			},
		})
		if (onSubmit) return onSubmit()
	}

	return { error, register }
}
