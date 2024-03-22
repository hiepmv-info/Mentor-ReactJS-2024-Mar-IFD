import { useCallback, useState } from 'react';
import NoteBox from './NoteBox/NoteBox';
import NoteControl from './NoteControls/NoteControls';
import NoteList from './NoteList/NoteList';
import './NoteTakingContainer.css'
import { formBlock, Note, NoteContext, NoteState } from './NoteTaking.const';

const initNoteList: Note[] = [
    {
        id: 1,
        title: "Second Note",
        content: "This is the second note",
        tags: ["tag1", "tag2"],
        createdDate: "2021-10-10",
        updatedDate: "2021-10-10"
    },
    {
        id: 2,
        title: "First Note",
        content: "This is the first note",
        tags: ["tag1", "tag3"],
        createdDate: "2021-10-11",
        updatedDate: "2021-10-11"
    },
    {
        id: 3,
        title: "Third Note",
        content: "This is the third note",
        tags: ["tag2", "tag3"],
        createdDate: "2021-10-12",
        updatedDate: "2021-10-12"
    }
].sort((a, b) => a.title.localeCompare(b.title));

function NoteTakingContainer() {
    const [state, setState] = useState<NoteState>({
        sort: 'title',
        order: 'Ascending',
        notes: initNoteList,
        ids: [],
        title: 'Create Note',
        selectedNote: {} as Note,
    });

    const onSort = useCallback((newSortType: string, newSortOrder: string, newNotes: Note[]) => {
        setState(prevState => ({ ...prevState, sort: newSortType, order: newSortOrder, notes: newNotes }));
    }, []);

    const onSearch = useCallback((notes: Note[]) => {
        setState(prevState => ({ ...prevState, notes }));
    }, []);

    const onAdd = useCallback((note: Note) => {
        note.id = state.notes.length + 1;
        note.createdDate = new Date().toISOString().split('T')[0];
        note.updatedDate = new Date().toISOString().split('T')[0];
        setState(prevState => ({ ...prevState, notes: [...prevState.notes, note] }));
    }, [state.notes.length]);

    const onEdit = useCallback((note: Note) => {
        note.updatedDate = new Date().toISOString().split('T')[0];
        setState(prevState => ({ ...prevState, notes: prevState.notes.map((n) => n.id === note.id ? note : n) }));
    }, []);

    const onDelete = useCallback((note: Note) => {
        setState(prevState => ({ ...prevState, notes: prevState.notes.filter((n) => n.id !== note.id) }));
    }, []);

    const onDeleteMultiple = useCallback(() => {
        setState(prevState => ({ ...prevState, notes: prevState.notes.filter((n) => !prevState.ids.includes(n.id)), ids: []}));
    }, []);
    
    const onClickCheckbox = useCallback((id: number) => {
        setState(prevState => ({ ...prevState, ids: prevState.ids.includes(id) ? prevState.ids.filter((n) => n !== id) : [...prevState.ids, id] }));
    }, []);

    const onChangeEdit = useCallback((note: Note) => {
        setState(prevState => ({ ...prevState, selectedNote: note, title: 'Edit Note'}));
    }, []);

    const onSubmit = useCallback((note: Note) => {
        if (note.id) {
            onEdit(note);
        } else {
            onAdd(note);
        }
    }, [onAdd, onEdit]);

    const sortContext = {
        sort: state.sort,
        order: state.order,
        onSort,
    }

    const searchContext = {
        onSearch,
        initNoteList,
    }

    const itemContext = {
        onEdit,
        onDelete,
        onClickCheckbox,
        onChangeEdit,
    }
    formBlock.title = state.title;
    formBlock.formFields = formBlock.formFields.map((field) => ({ ...field, value: state.selectedNote[field.property] }));

    const formContext = {
        formBlock,
        note: state.selectedNote,
        setNote: () => { },
        onAdd,
        onEdit,
        title: state.title,
        onSubmit,
    }

    return (
        <div className='container'>
            <NoteContext.Provider value={{ sortContext, searchContext, notes: state.notes, itemContext, ids: state.ids, onDeleteMultiple, formContext }}>
                <NoteBox />
                <NoteControl />
                <NoteList />
            </NoteContext.Provider>
        </div>
    )
}

export default NoteTakingContainer;