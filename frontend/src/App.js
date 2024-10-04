// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import SignIn from './components/SignIn.js'
import SignUp from './components/SignUp.js';
import UserList from './components/UserList.js';

function App() {

	const [user, setUser] = useState(null);

	const handleregister = (userData) => {
		setUser(userData)
	};	
	return (
		<div>
		   <Router>
			<Routes>
			<Route path="/" element={<Home user={user} />} />
			<Route path="/signin" element={<SignIn onSignIn={handleregister} />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/users" element={<UserList />} />
			</Routes>
		   </Router>
		</div>
	);
}

export default App;
