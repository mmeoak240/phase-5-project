import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../src/features/notes/notesSlice";
import { getFlashcards } from "./features/flashcards/flashcardsSlice";

const Flashcards = () => {
	const [card, setCard] = useState(0);
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

	function nextFlashcard() {
		if (card >= 0 && card < selectedNotebookFlashcards.length - 1) {
			setCard(card + 1);
			nextCardFlip();
		} else setCard(card);
	}

	function previousFlashcard() {
		if (card >= 1) {
			setCard(card - 1);
			nextCardFlip();
		} else setCard(0);
	}

	function handleDeleteNote(id) {
		dispatch(deleteNote(id));
	}

	const selectedNotebookFlashcards = flashcards.filter((flashcard) =>
		flashcard.tab.includes(searchResults)
	);

	const uniqueTabs = [...new Set(flashcards.map((data) => data.tab))];

	const flashcardsArray = selectedNotebookFlashcards.map((flashcard) => (
		<div class="front">
			{flipped ? (
				<>
					<h2 style={{ color: "black" }}>BACK</h2>
					<p style={{ color: "black" }}>{flashcard.back}</p>
				</>
			) : (
				<>
					<h2 style={{ color: "black" }}>FRONT</h2>
					<p style={{ color: "black" }}>{flashcard.front}</p>
				</>
			)}

			<button class="next-btn" onClick={nextFlashcard}>
				NEXT
			</button>
			<button
				class="flashcard-delete-btn"
				onClick={function () {
					handleDeleteNote(flashcard.id);
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
			<button class="back-btn" onClick={previousFlashcard}>
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
				name="flashcards"
				id="flashcards"
				onChange={handleChange}
				style={{ marginLeft: "1280px" }}
			>
				<option value="">Find by tab</option>
				{uniqueTabs.map((tab) => (
					<option value={tab}>{tab}</option>
				))}
			</select>
			<br></br>

			<div class="book">
				<div class="flip-book">
					<p>{flashcardsArray[card]}</p>
				</div>
			</div>
		</>
	);
};

export default Flashcards;
