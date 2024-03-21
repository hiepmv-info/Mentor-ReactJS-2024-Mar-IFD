import Button from "../Button/Button";
import "./Search.css"

function Search() {
    const handleClick = () => {
        console.log('clicked');
    }
    
    return (
        <>
            <div className="search">
                <input
                    className="search__input"
                    type="text"
                    placeholder="Search notes"
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