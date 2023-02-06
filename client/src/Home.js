import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import "./Nav.css";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
	const user = useSelector((store) => store.users.user);
	const dispatch = useDispatch();

	return (
		<>
			<a href="https://front.codes/" class="logo" target="_blank">
				<img
					src="https://static.vecteezy.com/system/resources/previews/004/565/763/original/combination-logo-of-letter-a-initials-and-modern-and-cool-book-icon-free-vector.jpg"
					alt=""
					style={{ height: "200px" }}
				/>
			</a>

			<NavBar />

			<div class="section-center">
				<h1 class="mb-0">All Study</h1>
				<p style={{ fontSize: "20px" }}>
					Welcome {user.username}, to your ultimate study buddy! <br></br> To
					get started navigate to the "Create" page and create your first
					notebook!
				</p>
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
