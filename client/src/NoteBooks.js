import { NavLink } from "react-router-dom";
import NoteBookCard from "./NoteBookCard";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const NoteBooks = () => {
	const notebooks = useSelector((state) => state.notebooks.notebooks);
	return (
		<>
			<NavBar />

			<div>
				<h1>Note Books</h1>
				<div id="grid" class="centerBooks">
					{notebooks.map((notebook) => (
						<div>
							<NoteBookCard notebook={notebook} key={notebook.id} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default NoteBooks;
