import { useEffect, useState, useCallback, useMemo } from "react";
import { NoteFormProps } from "../NoteTaking.const";
import Select from 'react-select';

const initNote = { title: '', content: '', id: 0, tags: [] };
const options = [
    { value: 'tag1', label: 'tag1' },
    { value: 'tag2', label: 'tag2' },
    { value: 'tag3', label: 'tag3' },
    { value: 'tag4', label: 'tag4' },
];

function NoteForm(noteFormProps: NoteFormProps) {
    console.log('NoteForm');
    const [note, setNote] = useState(noteFormProps.note || initNote);
    useEffect(() => {
        setNote(noteFormProps.note || initNote);
    }, [noteFormProps.note]);

    const handleSave = useCallback(() => (noteFormProps.title === 'Create Note' ? noteFormProps.create(note) : noteFormProps.edit(note)), [noteFormProps, note]);

    const handleChangeData = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    }, []);

    const handleChangeTags = useCallback((selectedOption) => {
        setNote(prevNote => ({
            ...prevNote,
            tags: selectedOption.map((option) => option.value)
        }));
    }, []);

    const handleCancel = useCallback(() => {
        noteFormProps.setSelectedNote(null);
        noteFormProps.setTitle('Create Note');
    }, [noteFormProps]);

    const showCancelButton = useMemo(() => noteFormProps.title === 'Edit Note', [noteFormProps.title]);

    return (
        <div className="block block-form">
            <div className="header">
                <h1>Note Taking App</h1>
                <p>Create a simple note-taking application where users can create, read, update, and delete notes.</p>
            </div>
            <div className="note-form">
                <div className="pd-40">
                    <span className="font-weight-bold">{noteFormProps.title}</span>
                    <input value={note?.title} name="title" onChange={handleChangeData} type="text" placeholder="Title" />
                    <textarea value={note?.content} name="content" onChange={handleChangeData} placeholder="Content"></textarea>
                    <Select
                        isMulti
                        closeMenuOnSelect={false}
                        options={options}
                        value={note.tags ? note.tags.map((tag) => ({ value: tag, label: tag })) : []}
                        className="select"
                        onChange={handleChangeTags}
                    />
                    <button onClick={handleSave} className="edit">Save</button>
                    {showCancelButton && (<button onClick={handleCancel} className="cancel">Cancel</button>)}
                </div>
            </div>
        </div>
    )
}

export default NoteForm;