import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
const Home = ({ user }) => {
	// const store = useSelector((store) => store.notebooks.test);
	return (
		<div>
			<NavBar />
			<p>Welcome {user.username}</p>
		</div>
	);
};

export default Home;
