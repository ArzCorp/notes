import { useEffect, useState } from 'react'

export default function useLocalStorage({ key }) {
	const [data, setData] = useState([])

	const setStorage = (items) => {
		const values = JSON.parse(window.localStorage.getItem(key)) || []
		const data = [...values, items]
		window.localStorage.setItem(key, JSON.stringify(data))
	}

	const getStorage = () => {
		try {
			const values = window.localStorage.getItem(key)
			setData(values)
		} catch (error) {
			console.error(error.message)
		}
	}

	useEffect(() => {
		getStorage()
	}, [key])

	return { storage: data, setStorage, getStorage }
}