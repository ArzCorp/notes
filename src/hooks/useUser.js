import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useUser() {
	const [message, setMessage] = useState('')
	const { storage, setStorage } = useLocalStorage({ key: 'user' })
	const { storage: users, setStorage: setUsers } = useLocalStorage({
		key: 'users',
	})

	const setUser = (item) => {
		setStorage(item)
	}

	const logOut = () => {
		setStorage({})
	}

	const update = (data) => {
		const dataUpdate = users.map((user) => {
			if (user.name === data.name) {
				setUser(data)
				return data
			} else {
				return user
			}
		})
		setUsers(dataUpdate)
		setMessage('Datos Actualizados')
	}

	return { user: storage, message, logOut, update, setUser }
}
