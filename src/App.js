import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LogIn from './pages/LogIn'
import Home from './pages/Home'
import Settings from './pages/Settings'

export default function App() {
	return (
		<Routes>
			<Route path="ingresar" element={<LogIn />} />
			<Route index path="inicio" element={<Home />} />
			<Route path="*" element={<LogIn />} />
			<Route path="Configuracion" element={<Settings />} />
		</Routes>
	)
}
