import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Dropdown.css";
import NavBar from "./NavBar";
import { createFlashcard } from "./features/flashcards/flashcardsSlice";

const AddFlashcard = () => {
	const [front, setFront] = useState("");
	const [back, setBack] = useState("");
	const [tab, setTab] = useState("");
	const [notebookId, setNotebookId] = useState(null);
	const notebooks = useSelector((store) => store.notebooks.notebooks);

	const dispatch = useDispatch();

	const user = useSelector((store) => store.users.user);
	const formErrors = useSelector((state) => state.flashcards.error);

	// const notebooks = user.note_books;

	const handleChange = (event) => {
		setNotebookId(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		const newFlashcard = {
			tab,
			front,
			back,
			user_id: user.id,
			note_book_id: notebookId,
		};
		dispatch(createFlashcard(newFlashcard));
		setTab("");
		setFront("");
		setBack("");
	}

	return (
		<div>
			<>
				<NavBar />
			</>
			<div>
				<h1>Make Flashcard</h1>
				<div className="form-box" style={{ paddingTop: "0px" }}>
					<form class="form" onSubmit={handleSubmit}>
						<select name="flashcards" id="flashcards" onChange={handleChange}>
							<option value="">Select Notebook</option>
							{notebooks.map((notebook) => (
								<option value={notebook.id}>{notebook.subject}</option>
							))}
						</select>

						<br></br>
						<input
							type="text"
							id="tab"
							value={tab}
							onChange={(e) => setTab(e.target.value)}
							placeholder="Tab"
						/>
						{/* <label>Note Page</label> */}

						<textarea
							maxlength="5000"
							type="text"
							id="content"
							value={front}
							onChange={(e) => setFront(e.target.value)}
							style={{
								width: "1000px",
								height: "600px",
								fontSize: 40,
							}}
							placeholder="Front of flashcard"
						/>
						<br></br>
						<textarea
							maxlength="5000"
							type="text"
							id="content"
							value={back}
							onChange={(e) => setBack(e.target.value)}
							style={{
								width: "1000px",
								height: "600px",
								fontSize: 40,
							}}
							placeholder="Back of flashcard"
						/>
						<br></br>
						<button type="submit" id="#formButton">
							Submit
						</button>
					</form>
				</div>
			</div>
			<ul>
				<p>
					{formErrors ? (
						formErrors.errors.map((error) => <h4>{error}</h4>)
					) : (
						<span></span>
					)}
				</p>
			</ul>
		</div>
	);
};

export default AddFlashcard;
