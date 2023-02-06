import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../src/features/notes/notesSlice";
import { getFlashcards } from "./features/flashcards/flashcardsSlice";

const Flashcards = () => {
	const [page, setpage] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const [flipped, setFlipped] = useState(false);
	const params = useParams();
	const notebookId = params.notebook_id;
	const user = useSelector((state) => state.users.user);
	const flashcards = useSelector((state) => state.flashcards.flashcards);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFlashcards());
	}, []);

	const notebook = user.note_books.find(
		(notebook) => notebook.id == notebookId
	);
	console.log(notebook);
	const [searchResults, setSearchResults] = useState("");
	const handleChange = (event) => {
		setSearchResults(event.target.value);
	};

	function flipCard() {
		setFlipped(!flipped);
	}

	function nextCardFlip() {
		setFlipped(false);
	}

	function nextPage() {
		if (page >= 0 && page < selectedNotebookPages.length - 1) {
			setpage(page + 1);
			nextCardFlip();
		} else setpage(page);
	}

	function previousPage() {
		if (page >= 1) {
			setpage(page - 1);
			nextCardFlip();
		} else setpage(0);
	}

	function handleDeleteNote(id) {
		dispatch(deleteNote(id));
	}

	const selectedNotebookPages = notebook.flashcards.filter((note) =>
		note.tab.includes(searchResults)
	);

	const pages = selectedNotebookPages.map((note) => (
		<div class="front">
			{flipped ? (
				<>
					<h2 style={{ color: "black" }}>BACK</h2>
					<p style={{ color: "black" }}>{note.back}</p>
				</>
			) : (
				<>
					<h2 style={{ color: "black" }}>FRONT</h2>
					<p style={{ color: "black" }}>{note.front}</p>
				</>
			)}

			<button class="next-btn" onClick={nextPage}>
				NEXT
			</button>
			<button
				class="flashcard-delete-btn"
				onClick={function () {
					handleDeleteNote(note.id);
				}}
			>
				DELETE
			</button>
			<button
				class="flashcard-flip-btn"
				onClick={function () {
					flipCard();
				}}
			>
				Flip
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
				{flashcards.map((note) => (
					<option value={note.tab}>{note.tab}</option>
				))}
			</select>
			<br></br>

			<div class="book">
				<div class="flip-book">
					<p>{pages[page]}</p>
				</div>
			</div>
		</>
	);
};

export default Flashcards;
