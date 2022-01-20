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
			ownerId: user.id,
			ownerImage: user.userImage,
			commentOwner: user.userName,
			...comment,
		}

		const newData = [...comments, newComment].reverse()

		setComments(newData)
		setStorage(newData)
	}

	const state = {
		comments: comments,
		setComment,
	}

	useEffect(() => {
		setComments(storage)
	}, [storage])

	return <Context.Provider value={state}>{children}</Context.Provider>
}
