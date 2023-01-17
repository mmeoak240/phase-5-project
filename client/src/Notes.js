import HTMLFlipBook from "react-pageflip";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Notes = () => {
	const [page, setpage] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const params = useParams();
	const notebookId = params.notebook_id;

	function nextPage() {
		if (page >= 0 && page < testNotes.length - 1) {
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

	const testNotes = [
		{
			tab: "mammals",
			content: "these are notes about mammals",
			note_book_id: 1,
		},
		{
			tab: "reptiles",
			content: "these are notes about reptiles",
			note_book_id: 1,
		},
		{ tab: "birds", content: "these are notes about birds", note_book_id: 2 },
		{
			tab: "insects",
			content: "these are notes about insects",
			note_book_id: 3,
		},
		{ tab: "fish", content: "these are notes about fish", note_book_id: 4 },
		{
			tab: "fish",
			content: "more notes on fish",
			note_book_id: 4,
		},
	];

	const selectedNotebookPages = testNotes.filter(
		(note) => note.note_book_id == notebookId
	);
	console.log(page);
	console.log(testNotes);
	const pages = selectedNotebookPages.map((testNote) => (
		<div class="front">
			<h2 style={{ color: "black" }}>
				Page {pageNumber} - {testNote.tab}
			</h2>
			<p style={{ color: "black" }}>{testNote.content}</p>

			<button class="next-btn" onClick={nextPage}>
				NEXT
			</button>

			<button class="back-btn" onClick={previousPage}>
				BACK
			</button>
		</div>
	));
	return (
		<div class="book">
			<div class="flip-book">
				<p>{pages[page]}</p>
			</div>
		</div>
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
