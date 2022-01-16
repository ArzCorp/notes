import { useEffect, useState } from 'react'

export default function useLocalStorage({ key }) {
	const [data, setData] = useState([])

	const setItem = (items) => {
		const values = JSON.parse(window.localStorage.getItem(key)) || []
		const data = [...values, items]
		window.localStorage.setItem(key, JSON.stringify(data))
	}

	const setStorage = (items) => {
		window.localStorage.setItem(key, JSON.stringify(items))
	}

	const getStorage = () => {
		try {
			const values = JSON.parse(window.localStorage.getItem(key)) || []
			setData(values)
		} catch (error) {
			console.error(error.message)
		}
	}

	useEffect(() => {
		getStorage()
	}, [key])

	return {
		storage: data,
		setItem,
		getStorage,
		setStorage,
	}
}
