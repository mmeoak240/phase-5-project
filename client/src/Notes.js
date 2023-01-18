import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const Notes = () => {
	const [page, setpage] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const params = useParams();
	const notebookId = params.notebook_id;

	const notes = useSelector((state) => state.notes.notes);
	console.log(notes);

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

	const selectedNotebookPages = notes.filter(
		(note) => note.note_book_id == notebookId
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

			<button class="back-btn" onClick={previousPage}>
				BACK
			</button>
		</div>
	));
	return (
		<>
			<NavBar />
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
