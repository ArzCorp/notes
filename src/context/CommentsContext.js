import React, { createContext, useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import useLocaleStorage from '../hooks/useLocalStorage'

export const Context = createContext({ value: 'storage' })

export default function CommentsContext({ children }) {
	const date = new Date().toLocaleDateString('es-mx')
	const { setItem, storage, setStorage } = useLocaleStorage({
		key: 'comments',
	})
	const { user } = useUser()
	const [comments, setComments] = useState(storage)

	const setComment = (comment) => {
		const id = comments.length + 1

		const newComment = {
			id: `${id}_${comment.comment}`,
			ownerId: user.id,
			date: date,
			ownerImage: user.userImage,
			commentOwner: user.userName,
			...comment,
		}

		const newData = [...comments, newComment]

		setComments(newData)
		setItem(newComment)
	}

	const removeComment = (id) => {
		const newData = comments.filter((comment) => comment.id !== id)

		setComments(newData)
		setStorage(newData)
	}

	useEffect(() => {
		setComments(storage)
	}, [storage])

	const state = {
		comments: comments.reverse(),
		setComment,
		removeComment,
	}

	return <Context.Provider value={state}>{children}</Context.Provider>
}
