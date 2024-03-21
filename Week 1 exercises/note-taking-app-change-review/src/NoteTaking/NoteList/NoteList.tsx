import { useContext } from "react";
import { NoteSearchContext, NoteSortContext } from "../NoteTaking.const";
import NoteItem from "./NoteItem/NoteItem";

function NoteList() {
    const { notes } = useContext(NoteSortContext);
    const { search } = useContext(NoteSearchContext);
  
    const filteredNotes = notes.filter(note => note.title.includes(search));
  
    return (
      filteredNotes.map((note) => (            
        <NoteItem key={note.id} {...note} />
      ))
    );
}

export default NoteList;