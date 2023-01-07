import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./App.css";

function Login({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const navigate = useNavigate;

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		}).then((r) => {
			if (r.ok) {
				r.json().then((client) => onLogin(client));
			} else {
				r.json().then((error) => setErrors(error.error));
			}
			setUsername("");
			setPassword("");
		});
	}
	// const ChangeUrl = () => {
	// 	navigate("/");
	// };

	// else console.log(r) r.errors.full_messages = [ "errors"]

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

				<button>
					<NavLink to="/signup">Signup</NavLink>
				</button>
				<ul>
					<p>{errors}</p>
				</ul>
			</form>
		</body>
	);
}

export default Login;
