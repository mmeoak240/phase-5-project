import { useState } from "react";
import Notes from "./Notes";

const NoteBookCard = ({ notebook, showNotes }) => {
	return (
		<>
			<div>
				<p class="noteBookTextCentered">{notebook.subject}</p>
				<button onClick={showNotes}>
					<img src={notebook.cover} alt="Notebook cover" class="noteBookSize" />
				</button>
			</div>
		</>
	);
};

export default NoteBookCard;
