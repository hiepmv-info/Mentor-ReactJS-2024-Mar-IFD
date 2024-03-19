import { useState } from "react";
import NoteForm from "./note-taking-form/NoteForm";
import NoteList from "./note-taking-list/NoteList";
import { Note } from "./NoteTaking.const";

function NoteTaking() {
    console.log('NoteTaking');
    const initNotes: Note[] = [
        { id: 1, title: 'Note 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
        { id: 2, title: 'Note 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' }
    ];

    const [notes, setNotes] = useState(initNotes);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const [title, setTitle] = useState('Create Note');

    const handleEdit = (note: Note) => {
        setSelectedNote(note);
        setTitle('Edit Note');
    };

    const handleSaveEdit = (note: Note) => {
        setNotes(notes.map((n) => n.id === note.id ? note : n));
    }

    const handleDelete = (note: Note) => {
        setNotes(notes.filter((n) => n.title !== note.title));
    };

    const handleCreate = (note: Note) => {
        note.id = notes.length + 1;
        setNotes([...notes, note]);
    }

    const noteProps = { title, create: handleCreate, edit: handleSaveEdit, note: selectedNote, setTitle };
    const noteListProps = { notes, edit: handleEdit, delete: handleDelete };

    return (
        <div className="container">
            <NoteForm {...noteProps} />
            <NoteList {...noteListProps} />
        </div>
    )
}

export default NoteTaking;