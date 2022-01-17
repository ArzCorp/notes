import { useState } from 'react'
import useLocalStorage from './useLocalStorage'
import useUser from './useUser'

export default function useComments({ onSubmit }) {
	const { storage, setItem, getStorage } = useLocalStorage({ key: 'comments' })
	const [error, setError] = useState('')
	const { user } = useUser()
	const idComemnt = storage.length + 1

	const date = new Date().toISOString().split('T')[0]

	const setComment = (data) => {
		const comment = {
			...data,
			id: idComemnt,
			userImage: user.userImage,
			commentOwner: user.userName,
			date: date,
		}
		setItem(comment)
		getStorage()
		if (onSubmit) return onSubmit()
	}

	return {
		comments: storage.reverse(),
		error,
		setComment,
		getComments: getStorage,
	}
}
