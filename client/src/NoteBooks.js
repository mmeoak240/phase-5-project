import { NavLink } from "react-router-dom";
import NoteBookCard from "./NoteBookCard";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";

const NoteBooks = () => {
	const notebooks = useSelector((state) => state.notebooks.notebooks);
	const dispatch = useDispatch();

	return (
		<>
			<NavBar />

			<div>
				<h1>Note Books</h1>
				<div>
					{notebooks.map((notebook) => (
						<NoteBookCard notebook={notebook} key={notebook.id} />
					))}
				</div>
			</div>
		</>
	);
};

export default NoteBooks;
