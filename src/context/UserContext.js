import React, { createContext, useReducer } from 'react'
import useLocaleStorage from '../hooks/useLocalStorage'

export const UserContext = createContext({ value: 'storage' })
export default function UserProvider({ children }) {
	const { updateStorage } = useLocaleStorage('users')

	const initialState = {
		users: [],
		user: {},
		message: '',
	}

	const reducer = (state, action) => {
		const { payload, type } = action

		switch (type) {
			case 'user/add': {
				const users = state.users.concat(payload)
				updateStorage(users)

				return {
					...state,
					users: state.users.concat(payload),
				}
			}

			case 'user/edit': {
				return {
					...state,
					user: payload,
					message: 'Datos actualizados',
				}
			}

			case 'user/logIn': {
				return {
					...state,
					user: payload,
				}
			}

			case 'user/logOut': {
				return {
					...state,
					user: {},
				}
			}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	const store = {
		users: state.users,
		user: state.user,
		dispatch,
		message: state.message,
	}

	return <UserContext.Provider value={store}>{children}</UserContext.Provider>
}
