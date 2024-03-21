import { useState } from "react";
import Button from "../Button/Button";
import { SearchProps } from "./Search.const";
import "./Search.css"

function Search(searchProps: SearchProps) {
    const [search, setSearch] = useState('');
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleClick = () => {
        searchProps.onChange(search);
    }

    return (
        <>
            <div className="search">
                <input
                    className="search__input"
                    type="text"
                    placeholder="Search notes"
                    onChange={handleSearch}
                />

                <select className="search__select">
                    <option value="Title">Title</option>
                    <option value="Tag">Tag</option>
                </select>
                <Button className="button-info ml-20" label="Search" onClick={handleClick} />
            </div>
            
        </>
    );
}

export default Search;