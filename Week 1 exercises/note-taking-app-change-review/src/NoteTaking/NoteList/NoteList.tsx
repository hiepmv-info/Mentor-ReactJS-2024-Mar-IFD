import { useContext } from "react";
import { NoteContext } from "../NoteTaking.const";
import NoteItem from "./NoteItem/NoteItem";
import Button from "../../shared/Button/Button";

function NoteList() {
    const { notes, onDeleteMultiple, ids } = useContext(NoteContext);

    return (
        <>
            {ids.length > 0 && (<Button label="Delete Multiple" className="button-delete mb-20" onClick={() => onDeleteMultiple(ids)} />)}
            {notes.map((note) => (
                <NoteItem key={note.id} {...note} />
            ))}
        </>
    );
}

export default NoteList;