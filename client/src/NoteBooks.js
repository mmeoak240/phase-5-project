import React, { useEffect } from "react";
import NoteBookCard from "./NoteBookCard";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getNotes } from "./features/notebooks/notebooksSlice";

const NoteBooks = () => {
	const dispatch = useDispatch();
	const user = useSelector((store) => store.users.user);
	const notes = useSelector((store) => store.notebooks.notes);
	const notebooks = useSelector((store) => store.notebooks.notebooks);

	// const notebooks = user.note_books;

	// useEffect(() => {
	// 	dispatch(getNotes());
	// 	dispatch(getFlashcards());
	// }, []);

	return (
		<>
			<NavBar />

			<div>
				<h1>Note Books</h1>
				<div id="grid" class="centerBooks">
					{notebooks.map((notebook) => (
						<div>
							<NoteBookCard notebook={notebook} key={notebook.id} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default NoteBooks;
