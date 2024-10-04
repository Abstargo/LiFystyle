import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../assests/styles/SignUp.css"

function SignUp() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSignUp = async () => {
		if (password !== password2) {
			setError("Passwords do not match")
			return;
		}
		try {
			const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, { username, email, password, password2 });
			if (response.status === 201) {
				navigate('/');
			}
			alert('User created successfully');
		} catch (error) {
			console.error('Error signing up:', error);
			setError('Sign-up failed. Please try again.');
		}
	};

	return (
		<form 
			className="form1"
		>
			<p className="title1">SignUp</p>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<p className="message">Signup now and get full access to our app</p>
			<label>		
					<input 
						required="" 
						placeholder="Username" 
						type="text" 
						className="input"
						value={username} 
						onChange={(e) => setUsername(e.target.value)} />
			
			</label>
			<label>
				<input 
					required="" 
					placeholder="Email" 
					type="email"
					className="input" 
					value={email} 
					onChange={(e) => setEmail(e.target.value) } />
				
			</label>
			<label>
				<input 
					required="" 
					placeholder="Password" 
					type="password"
					className="input" 
					value={password} 
					onChange={(e) => setPassword(e.target.value)} />
			
			</label>
			<label>
				<input 
					required="" 
					placeholder="Confirm Password" 
					type="password"
					className="input" 
					value={password2} 
					onChange={(e) => setPassword2(e.target.value)} />
			</label>
			<button type="button" className="submit" onClick={handleSignUp}>Sign Up</button>
			<p className="signin">Already have an account ?<a href="/signin">Signin</a></p>
		</form>
	);
}

export default SignUp;

/**
 * <div>
		<h1>Sign Up</h1>
		{error && <p style={{ color: 'red' }}>{error}</p>}
		<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
		<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value) } />
		<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
		<input type="password" placeholder="Password confirmation" value={password2} onChange={(e) => setPassword2(e.target.value)} />
		<button onClick={handleSignUp}>Sign Up</button>
		</div>
 */
