import React, { createContext, useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import useLocaleStorage from '../hooks/useLocalStorage'

export const Context = createContext({ value: 'storage' })

export default function CommentsContext({ children }) {
	const { setStorage, storage } = useLocaleStorage({ key: 'comments' })
	const { user } = useUser()
	const [comments, setComments] = useState([])

	const setComment = (comment) => {
		const newComment = {
			id: comments.length + 1,
			active: true,
			ownerId: user.id,
			ownerImage: user.userImage,
			commentOwner: user.userName,
			...comment,
		}

		const newData = [...comments, newComment]

		setComments(newData)
		setStorage(newData)
	}

	const getComments = () => {
		const data = storage.filter((comment) => comment.active)
		if (data.length > 0) return setComments(data)
	}

	useEffect(() => {
		getComments()
	}, [storage])

	const state = {
		comments: comments.reverse(),
		setComment,
	}

	return <Context.Provider value={state}>{children}</Context.Provider>
}
