import { useEffect, useState } from "react";
import { NoteFormProps } from "../NoteTaking.const";

function NoteForm(noteFormProps: NoteFormProps) {
    console.log('NoteForm');
    const [note, setNote] = useState(noteFormProps.note || { title: '', content: '', id: 0 });

    useEffect(() => {
        setNote(noteFormProps.note || { title: '', content: '', id: 0 });
    }, [noteFormProps.note]);

    const handleSave = () => (noteFormProps.title === 'Create Note' ? noteFormProps.create(note) : noteFormProps.edit(note));

    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        });
    }

    const handleCancel = () => {
        setNote({
            title: '',
            content: '',
            id: 0
        });
        noteFormProps.setTitle('Create Note');
    }

    const showCancelButton = noteFormProps.title === 'Edit Note';

    return (
        <div className="block block-form">
            <div className="header">
                <h1>Note Taking App</h1>
                <p>Create a simple note-taking application where users can create, read, update, and delete notes.</p>
            </div>
            <div className="note-form">
                <div className="pd-40">
                    <span className="font-weight-bold">{noteFormProps.title}</span>
                    <input value={note?.title} name="title" onChange={(e) => handleChangeData(e)} type="text" placeholder="Title" />
                    <textarea value={note?.content} name="content" onChange={(e) => handleChangeData(e)} placeholder="Content"></textarea>
                    <button onClick={handleSave} className="edit">Save</button>
                    {showCancelButton && (<button onClick={handleCancel} className="cancel">Cancel</button>)}
                </div>
            </div>
        </div>
    )
}

export default NoteForm;
