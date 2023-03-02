import { NavLink } from "react-router-dom";
import { logout } from "../src/features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { getNotebooks } from "./features/notebooks/notebooksSlice";

const NavBar = () => {
	const user = useSelector((state) => state.users.user);
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
							<NavLink to="/notebooks">Note Books</NavLink>
						</a>
					</li>
					<li>
						<a>
							<NavLink to="/notes/new">Create</NavLink>
						</a>
					</li>

					<li>
						<a>
							<NavLink to="/flashcards/new">Add Flashcard</NavLink>
						</a>
					</li>

					<li>
						<a>
							<NavLink to={`/users/${user.id}/edit`}>Account</NavLink>
						</a>
					</li>
					<li>
						<a>
							<NavLink onClick={handleLogoutClick} to="/">
								Logout
							</NavLink>
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
