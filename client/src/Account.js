import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser } from "./features/users/usersSlice";

import NavBar from "./NavBar";

const Account = () => {
	const user = useSelector((state) => state.users.user);
	const [username, setUsername] = useState(`${user.username}`);
	const [password, setPassword] = useState(`${user.password}`);
	const [confirmPassword, setConfirmPassword] = useState(`${user.password}`);
	const [major, setMajor] = useState(`${user.major}`);
	const accountEditErrors = useSelector((state) => state.users.error);

	const dispatch = useDispatch();

	function handleSubmit(event) {
		event.preventDefault();

		const updatedInfo = {
			id: user.id,
			username: username,
			password: password,
			password_confirmation: confirmPassword,
			major: major,
		};
		dispatch(updateUser(updatedInfo));
	}

	return (
		<>
			<NavBar />
			<div>
				<h1>Account Information</h1>

				<h2>Username - {user.username}</h2>
				<h2>Major - {user.major}</h2>
				<br></br>
				<h3>Edit Account Info</h3>
				<form onSubmit={handleSubmit} class="form">
					<label htmlFor="username" class="label">
						Username:
					</label>
					<input
						class="input"
						type="username"
						id="username"
						autoComplete="current-username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>

					<label htmlFor="password" class="label">
						Password:
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
						Confirm Password
					</label>
					<input
						class="input"
						type="password"
						id="password_confirmation"
						autoComplete="current-password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>

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
					<button type="submit">Confirm</button>

					<ul>
						<p>
							{accountEditErrors ? (
								accountEditErrors.errors.map((error) => <h4>{error}</h4>)
							) : (
								<span></span>
							)}
						</p>
					</ul>
				</form>
			</div>
		</>
	);
};

export default Account;
