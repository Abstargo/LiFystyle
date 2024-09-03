// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UserList from './UserList';

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
