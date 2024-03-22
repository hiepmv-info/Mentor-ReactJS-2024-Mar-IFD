import { useContext } from "react";
import Search from "../../../shared/Search/Search";
import { Note, NoteContext } from "../../NoteTaking.const";
import { SearchBlock, SearchProps } from "../../../shared/Search/Search.const";

function NoteSearch() {
    const { searchContext } = useContext(NoteContext);
    const searchBlock: SearchBlock[] = [
        { property: "title", type: "string", label: "Title" },
        {
            property: "tags", type: "multiSelect", label: "Tag", options: [
                { value: "tag1", label: "tag1" },
                { value: "tag2", label: "tag2" },
                { value: "tag3", label: "tag3" },
                { value: "tag4", label: "tag4" },
            ]
        }
    ]

    const searchProps: SearchProps<Note> = {
        onChange: searchContext.onSearch,
        searchBlock: searchBlock,
        data: searchContext.initNoteList,
        searchBy: "title"
    }

    return <Search<Note> {...searchProps} />;
}

export default NoteSearch;