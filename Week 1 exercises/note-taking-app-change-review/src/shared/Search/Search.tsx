import { useState } from "react";
import Button from "../Button/Button";
import { SearchProps } from "./Search.const";
import "./Search.css"
import Select from "react-select";

function Search<T>({ searchBlock, onChange, data, searchBy }: SearchProps<T>) {
    const [search, setSearch] = useState<string | string[]>('');
    const [selectedOptionSearch, setSelectedOptionSearch] = useState(searchBy || searchBlock[0].property);

    const handleSearch = () => {
        if (selectedOptionSearch) {
            const filteredData = data.filter((item: any) => {
                const itemValue = item[selectedOptionSearch];
                if (Array.isArray(itemValue)) {
                    return itemValue.some((value: any) => search.includes(value));
                }
                return itemValue.toString().toLowerCase().includes(search.toString().toLowerCase());
            })
            onChange(filteredData);
        }
    }

    const handleSearchTag = (selectedOption: any) => {
        setSearch(selectedOption.map((option: any) => option.value))
    }

    return (
        <div className="search">
            {searchBlock.map((block, index) => {
                const isSelected = selectedOptionSearch === block.property;
                return block.type === "string" && isSelected ? (
                    <input
                        key={index}
                        className="search__input"
                        type="text"
                        placeholder={`Search ${block.label}`}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                ) : block.type === "multiSelect" && isSelected ? (
                    <Select
                        key={index}
                        isMulti
                        closeMenuOnSelect={false}
                        className="search-tag"
                        options={block.options}
                        onChange={handleSearchTag}
                    />
                ) : null;
            })}

            <select className="search__select" onChange={(e) => { setSelectedOptionSearch(e.target.value); setSearch("") }}>
                {searchBlock.map((block, index) => (
                    <option key={index} value={block.property}>{block.label}</option>
                ))}
            </select>
            <Button className="button-info ml-20" label="Search" onClick={handleSearch} />
        </div>
    );
}

export default Search;