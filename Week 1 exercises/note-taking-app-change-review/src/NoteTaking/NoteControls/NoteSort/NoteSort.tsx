import { useContext } from "react";
import Sort from "../../../shared/Sort/Sort";
import { Note, NoteContext } from "../../NoteTaking.const";

function NoteSort() {
    const { sortContext, notes } = useContext(NoteContext);
    const sortProps = {
        sort: sortContext.sort,
        order: sortContext.order,
        data: notes,
        onSort: sortContext.onSort,
        block: [
            { property: "title", type: "string", label: "Title" },
            { property: "createdDate", type: "date", label: "Created Date" },
            { property: "updatedDate", type: "date", label: "Updated Date" }
        ],
        defaultSort: {
            property: "title",
            order: "Ascending",
        }
    }
    return <Sort<Note> {...sortProps} />;
}

export default NoteSort;