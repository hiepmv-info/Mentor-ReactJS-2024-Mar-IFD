import { useCallback, useMemo, useState } from "react";
import NoteForm from "./note-taking-form/NoteForm";
import NoteList from "./note-taking-list/NoteList";
import { formatDate, Note } from "./NoteTaking.const";
import NoteSearch from "./note-taking-search/NoteSearch";

function NoteTaking() {
    console.log('NoteTaking');
    const initNotes: Note[] = useMemo(() => [
        {
            id: 1, title: 'abc', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            tags: ['tag1', 'tag2'],
            createdDate: formatDate(new Date("2021-09-01")),
            updatedDate: formatDate(new Date("2021-09-01"))
        },
        {
            id: 2, title: 'asfasf', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            tags: ['tag3', 'tag4'],
            createdDate: formatDate(new Date("2021-09-02")),
            updatedDate: formatDate(new Date("2021-09-02"))
        },
        {
            id: 3, title: 'asfas', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            tags: ['tag1', 'tag4'],
            createdDate: formatDate(new Date("2021-10-02")),
            updatedDate: formatDate(new Date("2021-10-02"))
        }
    ].sort((a, b) => a.title.localeCompare(b.title)), []);

    const [notes, setNotes] = useState(initNotes);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const [title, setTitle] = useState('Create Note');

    const handleEdit = useCallback((note: Note) => {
        setSelectedNote(note);
        setTitle('Edit Note');
    }, []);

    const handleSaveEdit = useCallback((note: Note) => {
        note.updatedDate = formatDate(new Date());
        setNotes(prevNotes => prevNotes.map((n) => n.id === note.id ? note : n));
    }, []);

    const handleDelete = useCallback((note: Note) => {
        setNotes(prevNotes => prevNotes.filter((n) => n.title !== note.title));
    }, []);

    const handleCreate = useCallback((note: Note) => {
        note.id = notes.length + 1;
        note.createdDate = formatDate(new Date());
        note.updatedDate = formatDate(new Date());
        setNotes(prevNotes => [...prevNotes, note]);
    }, [notes.length]);

    const handleDeleteMultiple = useCallback((ids: number[]) => {
        setNotes(prevNotes => prevNotes.filter((n) => !ids.includes(n.id)));
    }, []);

    const handleSearch = useCallback((searchText: string | string[], searchType: string) => {
        if (searchType === 'Title') {
            setNotes(initNotes.filter((note) => note.title.toLowerCase().includes(searchText.toString().toLowerCase())));
        } else {
            setNotes(initNotes.filter((note) => note.tags.some((tag) => searchText.includes(tag))));
        }
    }, [initNotes]);

    const noteFormProps = useMemo(() => ({ title, create: handleCreate, edit: handleSaveEdit, note: selectedNote, setTitle, setSelectedNote }), [title, handleCreate, handleSaveEdit, selectedNote, setTitle]);
    const noteListProps = useMemo(() => ({ notes, edit: handleEdit, delete: handleDelete, deleteMultiple: handleDeleteMultiple }), [notes, handleEdit, handleDelete, handleDeleteMultiple]);
    const noteSearchProps = useMemo(() => ({ search: handleSearch }), [handleSearch]);

    return (
        <div className="container">
            <NoteSearch {...noteSearchProps} />
            <NoteForm {...noteFormProps} />
            <NoteList {...noteListProps} />
        </div>
    )
}

export default NoteTaking;