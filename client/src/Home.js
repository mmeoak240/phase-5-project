import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
const Home = () => {
	const user = useSelector((store) => store.users.user);
	return (
		<div>
			<NavBar />
			<p>Welcome {user.username}</p>
		</div>
	);
};

export default Home;
