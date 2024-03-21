import { useState } from 'react';
import NoteBox from './NoteBox/NoteBox';
import NoteControl from './NoteControls/NoteControls';
import NoteList from './NoteList/NoteList';
import './NoteTakingContainer.css'
import { Note, NoteSortContext } from './NoteTaking.const';

const initNoteList: Note[] = [
    {
        id: 1,
        title: "Second Note",
        tags: ["tag1", "tag2"],
        createdDate: "2021-10-10",
        updatedDate: "2021-10-10"
    },
    {
        id: 2,
        title: "First Note",
        tags: ["tag1", "tag3"],
        createdDate: "2021-10-11",
        updatedDate: "2021-10-11"
    },
    {
        id: 3,
        title: "Third Note",
        tags: ["tag2", "tag3"],
        createdDate: "2021-10-12",
        updatedDate: "2021-10-12"
    }
].sort((a, b) => a.title.localeCompare(b.title));

function NoteTakingContainer() {
    const [sort, setSort] = useState('title');
    const [order, setOrder] = useState('Ascending');
    const [notes, setNotes] = useState<Note[]>(initNoteList);

    const onSort = (newSortType: string, newSortOrder: string, newNotes: Note[]) => {
        setSort(newSortType);
        setOrder(newSortOrder);
        setNotes(newNotes);
    };

    return (
        <div className='container'>
            <NoteSortContext.Provider value={{ sort, order, onSort, notes }}>
                <NoteBox />
                <NoteControl />
                <NoteList />
            </NoteSortContext.Provider>
        </div>
    )
}

export default NoteTakingContainer;