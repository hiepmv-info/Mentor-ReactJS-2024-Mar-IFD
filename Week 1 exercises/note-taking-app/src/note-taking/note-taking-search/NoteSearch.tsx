import { useCallback, useState } from "react";
import { NoteSearchProps } from "../NoteTaking.const";
import Select from "react-select";

const options = [
    { value: "tag1", label: "tag1" },
    { value: "tag2", label: "tag2" },
    { value: "tag3", label: "tag3" },
    { value: "tag4", label: "tag4" },
];

function NoteSearch(noteSearchProps: NoteSearchProps) {
    console.log("NoteSearch");

    const [search, setSearch] = useState<string | string[]>("");
    const [searchType, setSearchType] = useState("Title");

    const handleSearch = useCallback(() => {
        noteSearchProps.search(search, searchType);
    }, [noteSearchProps, search, searchType]);

    const handleSearchTag = useCallback((selectedOption) => {
        setSearch(selectedOption.map((option) => option.value));
    }, []);

    const handleSearchTypeChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            setSearchType(e.target.value);
            setSearch("");
        },
        []
    );

    return (
        <>
            <div className="note-search">
                {searchType === "Title" ? (
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        type="text"
                        placeholder="Search notes"
                    />
                ) : (
                    <Select
                        isMulti
                        closeMenuOnSelect={false}
                        className="search-tag"
                        options={options}
                        onChange={handleSearchTag}
                    />
                )}

                <select defaultValue={searchType} onChange={handleSearchTypeChange}>
                    <option value="Title">Title</option>
                    <option value="Tag">Tag</option>
                </select>
            </div>
            <div className="div-button-search">
                <button onClick={handleSearch} className="button-search">
                    Search
                </button>
            </div>
        </>
    );
}

export default NoteSearch;
