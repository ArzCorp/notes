import { useEffect, useState } from 'react'

export default function useLocalStorage(key) {
	const [storage, setStorage] = useState([])

	const updateStorage = (items) => {
		window.localStorage.setItem(key, JSON.stringify(items))
	}

	const getStorage = () => {
		try {
			const data = JSON.parse(window.localStorage.getItem(key)) || []
			setStorage(data)
		} catch (error) {
			console.error(error.message)
		}
	}

	useEffect(() => {
		getStorage()
	}, [])

	return {
		storage,
		getStorage,
		updateStorage,
	}
}
