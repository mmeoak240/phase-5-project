import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../src/features/users/usersSlice";

const NavBar = () => {
	const dispatch = useDispatch();

	function handleLogoutClick() {
		dispatch(logout());
	}

	return (
		<>
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
						<NavLink onClick={handleLogoutClick} to="/">
							Logout
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
