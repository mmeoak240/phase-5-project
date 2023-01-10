import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./App.css";
import "./Nav.css";
import NavBar from "./NavBar";
import { logout } from "../src/features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
	const user = useSelector((store) => store.users.user);
	const dispatch = useDispatch();

	function handleLogoutClick() {
		dispatch(logout());
	}
	return (
		<>
			<a href="https://front.codes/" class="logo" target="_blank">
				<img
					src="https://static.vecteezy.com/system/resources/previews/004/565/763/original/combination-logo-of-letter-a-initials-and-modern-and-cool-book-icon-free-vector.jpg"
					alt=""
					style={{ height: "200px" }}
				/>
			</a>

			<input
				class="menu-icon"
				type="checkbox"
				id="menu-icon"
				name="menu-icon"
			/>
			<label for="menu-icon"></label>
			<nav class="nav">
				<ul class="pt-5">
					<li>
						<a>
							<NavLink to="/">Home</NavLink>
						</a>
					</li>
					<li>
						<a>
							<NavLink to="/noteBooks">Note Books</NavLink>
						</a>
					</li>
					<li>
						<a>
							<NavLink to="/create">Create</NavLink>
						</a>
					</li>
					<li>
						<a onClick={handleLogoutClick}>Logout</a>
					</li>
				</ul>
			</nav>

			<div class="section-center">
				<h1 class="mb-0">All Study</h1>
			</div>
		</>
	);
};

export default Home;

{
	/* <div>
<NavBar />
<p>Welcome {user.username}</p>
</div> */
}
