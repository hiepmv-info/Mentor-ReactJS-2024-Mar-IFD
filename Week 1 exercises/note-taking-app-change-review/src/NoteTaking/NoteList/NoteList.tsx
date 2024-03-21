import { useContext } from "react";
import { NoteSortContext } from "../NoteTaking.const";
import NoteItem from "./NoteItem/NoteItem";

function NoteList() {
    const { notes } = useContext(NoteSortContext);

    // const sortedNoteList = useMemo(() => {
    //     const sortedList = [...notes].sort((a, b) => {
    //         if (sort === "Title") {
    //             return a.title.localeCompare(b.title);
    //         } else if (sort === "Created Date") {
    //             return new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime();
    //         } else if (sort === "Updated Date") {
    //             return new Date(a.updatedDate).getTime() - new Date(b.updatedDate).getTime();
    //         }
    //     });

    //     if (order === "Descending") {
    //         sortedList.reverse();
    //     }

    //     return sortedList;
    // }, [sort, order]);

    return (
        notes.map((note) => (            
            <NoteItem key={note.id} {...note} />
        ))
    );
}

export default NoteList;