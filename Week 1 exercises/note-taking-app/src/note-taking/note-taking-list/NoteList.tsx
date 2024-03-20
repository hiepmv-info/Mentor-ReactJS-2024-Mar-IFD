import { useCallback, useEffect, useState } from "react";
import { Note, NoteListProps } from "../NoteTaking.const";

function NoteList(noteListProps: NoteListProps) {
    console.log("NoteList");
    const [sortedNotes, setSortedNotes] = useState<Note[]>([]);

    const [sort, setSort] = useState('Title');
    const [order, setOrder] = useState('Ascending');

    const [checkedList, setCheckedList] = useState<number[]>([]);

    const handleCheck = (id: number) => {
        if (checkedList.includes(id)) {
            setCheckedList(checkedList.filter((i) => i !== id));
        } else {
            setCheckedList([...checkedList, id]);
        }
    }

    const handleSort = useCallback((sort: string, order: string) => {
        let sortedNotes = noteListProps.notes;
        if (sort === 'Title') {
            sortedNotes = sortedNotes.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === 'Created Date') {
            sortedNotes = sortedNotes.sort((a, b) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime());
        } else if (sort === 'Updated Date') {
            sortedNotes = sortedNotes.sort((a, b) => new Date(a.updatedDate).getTime() - new Date(b.updatedDate).getTime());
        }

        if (order === 'Descending') {
            sortedNotes = sortedNotes.reverse();
        }

        setSortedNotes(sortedNotes);
    }, [noteListProps.notes]);

    useEffect(() => {
        handleSort(sort, order);
    }, [noteListProps.notes, sort, order, handleSort]);

    const handleEdit = (note: Note) => {
        noteListProps.edit(note);
    };

    const handleDelete = (note: Note) => {
        noteListProps.delete(note);
    };

    return (
        <>
            <div className="div-sort-by">
                <span>Sort by</span>
                <select defaultValue="Title" onChange={(e) => { setSort(e.target.value); handleSort(e.target.value, order); }}>
                    <option>Title</option>
                    <option>Created Date</option>
                    <option>Updated Date</option>
                </select>
                <select defaultValue="Ascending" onChange={(e) => { setOrder(e.target.value); handleSort(sort, e.target.value); }}>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
                {checkedList.length > 0 && <button onClick={() => noteListProps.deleteMultiple(checkedList)} className="delete">Delete Multiple</button>}
            </div>
            {sortedNotes.map((note, index) => (
                <div key={index} className="block">
                    <div className="note">
                        <div className="div-title-tag">
                            <input type="checkbox" checked={checkedList.includes(note.id)} onChange={() => handleCheck(note.id)} />
                            <div>
                                <p className="note-content">{note.title}</p>
                                <div>
                                    {note.tags.map((tag, i) => (
                                        <span key={i} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="div-date">
                                    <p className="note-date">Created Date: {note.createdDate}</p>
                                    <p className="note-date">Updated Date: {note.updatedDate}</p>
                                </div>
                            </div>
                        </div>
                        <div className="note-actions">
                            <button onClick={() => handleEdit(note)} className="edit">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(note)} className="delete">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default NoteList;
