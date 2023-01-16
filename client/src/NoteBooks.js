import NoteBookNav from "./NoteBookNav";
import NavBar from "./NavBar";
import { NavLink, useNavigate } from "react-router-dom";
import NoteBookCard from "./NoteBookCard";
import { logout } from "../src/features/users/usersSlice";
import Notes from "./Notes";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const NoteBooks = ({ onNoteSubmit }) => {
	// console.log(notebooks);
	const [flag, setFlag] = useState(true);

	const notebooks = useSelector((state) => state.notebooks.notebooks);
	const dispatch = useDispatch();

	function showNotes() {
		setFlag(!flag);
		console.log("show");
	}

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
						<a onClick={handleLogoutClick}>Logout</a>
					</li>
				</ul>
			</nav>
			{flag ? (
				<div>
					<h1>Note Books</h1>
					<div>
						{notebooks.map((notebook) => (
							<NoteBookCard
								notebook={notebook}
								key={notebook.id}
								showNotes={showNotes}
							/>
						))}
					</div>
				</div>
			) : (
				<Notes showNotes={showNotes} onNoteSubmit={onNoteSubmit} />
			)}
		</>
	);
};

export default NoteBooks;
