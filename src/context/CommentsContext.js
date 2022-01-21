import React, { createContext, useReducer } from 'react'
import useUser from '../hooks/useUser'

export const Context = createContext({ value: 'storage' })

export default function CommentsContext({ children }) {
	const initialState = []
	const date = new Date().toISOString().split('T')[0]
	const { user } = useUser()

	const reducer = (state, action) => {
		const { payload, type } = action

		switch (type) {
			case 'comment/add': {
				const newComment = {
					id: Math.abs(Math.floor(Math.random() * (1 - 1000)) + 1),
					date: date,
					active: true,
					message: payload.comment,
					commentOwner: user.userName,
					ownerImage: user.userImage,
				}

				return state.concat(newComment)
			}
			case 'comment/remove': {
				const updated = state.map((comment) => {
					if (comment.id === payload.id) {
						return {
							...comment,
							active: !comment.active,
						}
					}

					return comment
				})

				return updated
			}
			default:
				return state
		}
	}

	const [comments, dispatch] = useReducer(reducer, initialState)

	const state = {
		comments: comments.filter((comment) => comment.active),
		dispatch,
	}

	return <Context.Provider value={state}>{children}</Context.Provider>
}
