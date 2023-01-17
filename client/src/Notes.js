import HTMLFlipBook from "react-pageflip";
import { useState } from "react";

const Notes = () => {
	const [pageNumber, setPageNumber] = useState(0);

	function nextPage() {
		if (pageNumber >= 0 && pageNumber < testNotes.length - 1) {
			setPageNumber(pageNumber + 1);
		} else setPageNumber(pageNumber);
	}

	function previousPage() {
		if (pageNumber >= 1) {
			setPageNumber(pageNumber - 1);
		} else setPageNumber(0);
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
	];

	const pages = testNotes.map((testNote) => (
		<div class="front">
			<h2 style={{ color: "black" }}>Page 1 - {testNote.tab}</h2>
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
				<p>{pages[pageNumber]}</p>
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
