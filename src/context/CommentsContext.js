import React, { createContext, useEffect, useState } from 'react'
import useLocaleStorage from '../hooks/useLocalStorage'

export const Context = createContext({ value: 'storage' })

export default function CommentsContext({ children }) {
	const { setStorage, storage } = useLocaleStorage({ key: 'comments' })
	const [comments, setComments] = useState([])

	const setComment = (comment) => {
		setComments([...comments, comment])
		setStorage([...comments, comment])
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
