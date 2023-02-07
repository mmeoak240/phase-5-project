import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../src/features/notes/notesSlice";
import { getFlashcards } from "./features/flashcards/flashcardsSlice";

const Notes = () => {
	const [page, setpage] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const params = useParams();
	const notebookId = params.notebook_id;
	const user = useSelector((state) => state.users.user);
	const dispatch = useDispatch();

	const notebook = user.note_books.find(
		(notebook) => notebook.id == notebookId
	);

	const uniqueTabs = [...new Set(notebook.notes.map((data) => data.tab))];
	// const notes = useSelector((state) => state.notes.notes);

	const [searchResults, setSearchResults] = useState("");
	// use user to find selected notebook then use notebook.notes
	// change url to note_books/:id/notes

	const handleChange = (event) => {
		setSearchResults(event.target.value);
	};

	function nextPage() {
		if (page >= 0 && page < selectedNotebookPages.length - 1) {
			setpage(page + 1);
			setPageNumber(pageNumber + 1);
		} else setpage(page);
	}

	function previousPage() {
		if (page >= 1) {
			setpage(page - 1);
			setPageNumber(pageNumber - 1);
		} else setpage(0);
	}

	function handleDeleteNote(id) {
		dispatch(deleteNote(id));
	}

	const selectedNotebookPages = notebook.notes.filter((note) =>
		note.tab.includes(searchResults)
	);

	const pages = selectedNotebookPages.map((note) => (
		<div class="front">
			<h2 style={{ color: "black" }}>
				Page {pageNumber} - {note.tab}
			</h2>
			<p style={{ color: "black" }}>{note.content}</p>

			<button class="next-btn" onClick={nextPage}>
				NEXT
			</button>
			<button
				class="note-dlt-btn"
				onClick={function () {
					handleDeleteNote(note.id);
				}}
			>
				DELETE
			</button>
			<button class="back-btn" onClick={previousPage}>
				BACK
			</button>
		</div>
	));
	return (
		<>
			<NavBar />
			<h1 className="noteTitle">
				{notebook.subject} : {searchResults}
			</h1>
			<br></br>
			<select
				name="notes"
				id="notes"
				onChange={handleChange}
				style={{ marginLeft: "1280px" }}
			>
				<option value="">Find by tab</option>
				{uniqueTabs.map((tab) => (
					<option value={tab}>{tab}</option>
				))}
			</select>
			<br></br>

			<NavLink to={`/notebooks/${notebookId}/flashcards`}>Flashcards</NavLink>

			<div class="book">
				<div class="flip-book">
					<p>{pages[page]}</p>
				</div>
			</div>
		</>
	);
};

export default Notes;

{
	/* <div class="book">
<div class="flip-book">
	<div class="flip" id="p1">
		<div class="back">
			<img src="1.jpg" alt="" />
			<label for="c1" class="back-btn">
				Before
			</label>
		</div>
		<div class="front">
			<h2>{testNote.tab}</h2>
			<p>{testNote.content}</p>
			<label for="c1" class="next-btn">
				NEXT
			</label>
		</div>
		<div class="front">
			<h2>{testNote.tab}</h2>
			<p>{testNote.content}</p>
			<label for="c2" class="next-btn">
				NEXT
			</label>
		</div>
	</div>
</div>
</div> */
}
