// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UserList from './UserList';

function App() {
	
	return (
		<div>
		   <Router>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/users" element={<UserList />} />
			</Routes>
		   </Router>
		</div>
	);
}

export default App;
