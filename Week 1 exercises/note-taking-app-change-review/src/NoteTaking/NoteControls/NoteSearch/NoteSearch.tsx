import { useContext } from "react";
import Search from "../../../shared/Search/Search";
import { NoteSearchContext } from "../../NoteTaking.const";

function NoteSearch() {
    const { search, onSearch } = useContext(NoteSearchContext);

    return (
        <Search value={search} onChange={onSearch} />
    );
}

export default NoteSearch;