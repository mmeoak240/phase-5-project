import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../src/features/users/usersSlice";
import "./App.css";

function Login({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const dispatch = useDispatch();

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	fetch("/login", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({ username, password }),
	// 	}).then((r) => {
	// 		if (r.ok) {
	// 			r.json().then((client) => onLogin(client));
	// 		} else {
	// 			r.json().then((error) => setErrors(error.error));
	// 		}
	// 		setUsername("");
	// 		setPassword("");
	// 	});
	// }

	function handleSubmit(event) {
		event.preventDefault();
		const userInfo = {
			username,
			password,
		};
		dispatch(login(userInfo));
		setUsername("");
		setPassword("");
	}

	return (
		<body>
			<h1 className="title">All Study</h1>
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>
				<label>Username</label>
				<input
					class="input"
					type="text"
					id="username"
					autoComplete="off"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Password</label>
				<input
					class="input"
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button type="submit">Login</button>

				<NavLink to="/signup">
					<button>Signup</button>
				</NavLink>

				<ul>
					<p>{errors}</p>
				</ul>
			</form>
		</body>
	);
}

export default Login;
