import { useContext } from "react";
import Sort from "../../../shared/Sort/Sort";
import { NoteSortContext } from "../../NoteTaking.const";

function NoteSort() {
    const setSort = useContext(NoteSortContext);
    const sortProps = {
        sort: setSort.sort,
        order: setSort.order,
        data: setSort.notes,
        onSort: setSort.onSort,
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
    return (
        <Sort {...sortProps} />
    );
}

export default NoteSort;