import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "./features/users/usersSlice";

function SignUp({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [major, setMajor] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const signupErrors = useSelector((state) => state.users.error);

	function onSubmit(e) {
		e.preventDefault();
		if (password !== passwordConfirmation) {
			setPasswordError("Passwords do not match!");
		} else {
			const user = {
				username,
				password,
				password_confirmation: passwordConfirmation,
				major,
			};

			dispatch(signup(user));
			navigate("/", { replace: true });

			setUsername("");
			setPassword("");
			setPasswordConfirmation("");
			setMajor("");
		}
	}

	return (
		<div>
			<h1>Signup</h1>
			<form onSubmit={onSubmit} class="form">
				<label htmlFor="username" class="label">
					Username
				</label>
				<input
					class="input"
					type="text"
					id="username"
					autoComplete="off"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label htmlFor="password" class="label">
					Password
				</label>
				<input
					class="input"
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<label htmlFor="passwordConfirmation" class="label">
					Password Confirmation
				</label>
				<input
					class="input"
					type="password"
					id="password_confirmation"
					autoComplete="current-password"
					value={passwordConfirmation}
					onChange={(e) => setPasswordConfirmation(e.target.value)}
				/>
				<span>{passwordError ? { passwordError } : null}</span>
				<label htmlFor="goals" class="label">
					Major
				</label>
				<input
					class="input"
					type="text"
					id="major"
					autoComplete="off"
					value={major}
					onChange={(e) => setMajor(e.target.value)}
				/>
				<button type="submit">Signup</button>
				<NavLink to="/">
					<button>Login</button>
				</NavLink>
				<ul>
					<p>
						{signupErrors ? (
							signupErrors.errors.map((error) => <h4>{error}</h4>)
						) : (
							<span></span>
						)}
					</p>
				</ul>
			</form>
		</div>
	);
}

export default SignUp;
