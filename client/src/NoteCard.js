const NoteCard = ({ note }) => {
	return (
		<div>
			<h4>{note.tab}</h4>
			<p>{note.content}</p>
		</div>
	);
};

export default NoteCard;
