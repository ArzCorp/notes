import { useState, useReducer } from 'react'
import useLocalStorage from './useLocalStorage'
import useUser from './useUser'

const initialState = {
	comments: [],
	error: '',
}

export default function useComments({ onSubmit }) {
	const date = new Date().toISOString().split('T')[0]
	const { storage, setItem, getStorage } = useLocalStorage({ key: 'comments' })
	const { user } = useUser()

	const reducer = (state, action) => {
		switch (action.type) {
			case 'comment/add': {
				const newComment = {
					id: Math.random() * (1 - 1000) + 1,
				}
				return state.comments.concat(newComment)
			}
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	return {
		comments: state.comments,
		error: state.error,
		dispatch,
	}
}
