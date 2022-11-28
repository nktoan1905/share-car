import Login from './User/Login.jsx';
import { Routes, Route } from 'react-router-dom';
import Register from './User/Register.jsx';
import HomePage from './pages/HomePage.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {
	const user = useSelector((state) => state.user);


	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default App;
