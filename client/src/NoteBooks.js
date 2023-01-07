import NoteBookNav from "./NoteBookNav";
import NavBar from "./NavBar";
import NoteBookCard from "./NoteBookCard";
import Notes from "./Notes";
import { useState } from "react";
import { useSelector } from "react-redux";

const NoteBooks = ({ onNoteSubmit }) => {
	// console.log(notebooks);
	const [flag, setFlag] = useState(true);

	const notebooks = useSelector((state) => state.notebooks.notebooks);

	function showNotes() {
		setFlag(!flag);
		console.log("show");
	}

	return (
		<>
			<NavBar />
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
