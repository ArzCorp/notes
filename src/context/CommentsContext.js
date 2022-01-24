import React, { createContext, useContext, useReducer } from 'react'
import { UserContext } from './UserContext'

export const CommentsContext = createContext({ value: 'storage' })

export default function CommentsProvider({ children }) {
	const initialState = {
		comments: [],
		selectedComment: {},
	}
	const date = new Date().toISOString().split('T')[0]
	const { user } = useContext(UserContext)

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

				return {
					...state,
					comments: state.comments.concat(newComment),
				}
			}
			case 'comment/remove': {
				const updated = state.comments.map((comment) => {
					if (comment.id === payload.id) {
						return {
							...comment,
							active: !comment.active,
						}
					}

					return comment
				})

				return {
					...state,
					comments: updated,
				}
			}
			case 'comment/selected': {
				return {
					...state,
					selectedComment: payload,
				}
			}
			case 'comment/edit': {
				const updated = state.comments.map((comment) => {
					if (comment.id === payload.id) {
						return payload
					}
					return comment
				})

				return {
					...state,
					comments: updated,
					selectedComment: {},
				}
			}
			default:
				return {
					...state,
					comments: state,
				}
		}
	}

	const [comments, dispatch] = useReducer(reducer, initialState)

	const state = {
		comments: comments.comments.filter((comment) => comment.active),
		selectedComment: comments.selectedComment,
		dispatch,
	}

	return (
		<CommentsContext.Provider value={state}>
			{children}
		</CommentsContext.Provider>
	)
}
