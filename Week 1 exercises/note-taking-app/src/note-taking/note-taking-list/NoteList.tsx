import { Note, NoteListProps } from "../NoteTaking.const";

function NoteList(noteListProps: NoteListProps) {
    console.log('NoteList');
    const handleEdit = (note: Note) => {
        noteListProps.edit(note);
    };

    const handleDelete = (note: Note) => {
        noteListProps.delete(note);
    };

    return (
        noteListProps.notes.map((note, index) => (
            <div key={index} className="block">
                <div className="note">
                    <span>{note.title}</span>
                    <div className="note-actions">
                        <button onClick={() => handleEdit(note)} className="edit">Edit</button>
                        <button onClick={() => handleDelete(note)} className="delete">Delete</button>
                    </div>
                </div>
            </div>
        ))
    )
}

export default NoteList;