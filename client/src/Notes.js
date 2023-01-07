import NoteBookNav from "./NoteBookNav";
import NoteCard from "./NoteCard";
import AddNote from "./AddNote";

const Notes = ({ notes, onNoteSubmit, showNotes, notebook }) => {
	console.log(notes);
	return (
		<div>
			<h1>Notes</h1>
			<AddNote onNoteSubmit={onNoteSubmit} notebook={notebook} />
			<button onClick={showNotes}>Back</button>
			{/* <div>
				{notes.map((note) => (
					<NoteCard note={note} key={note.id} />
				))}
			</div> */}
		</div>
	);
};

export default Notes;
