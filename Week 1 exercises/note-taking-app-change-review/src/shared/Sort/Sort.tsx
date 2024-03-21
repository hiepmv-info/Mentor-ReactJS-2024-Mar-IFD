import { useCallback } from "react";
import { SortProps } from "./Sort.const";
import "./Sort.css";

function Sort({ data, onSort, defaultSort, block }: SortProps) {
    const handleSort = useCallback((sortType: string, sortOrder: string, type: string) => {
        const sortedList = [...data].sort((a, b) => {
            if (type === "string") {
                return a[sortType].localeCompare(b[sortType]);
            } else if (type === "date") {
                return new Date(a[sortType]).getTime() - new Date(b[sortType]).getTime();
            }
        });

        if (sortOrder === "Descending") {
            sortedList.reverse();
        }

        onSort(sortType, sortOrder, sortedList);
    }, [data, onSort]);

    return (
        <div className="sort">
            <span className="sort__span">Sort by</span>
            <select className="sort__select" defaultValue={defaultSort.property} onChange={(e) => {
                const selectedBlock = block.find(block => block.property === e.target.value);
                if (selectedBlock) {
                    handleSort(e.target.value, defaultSort.order, selectedBlock.type);
                }
            }}>
                {block.map((block) => (
                    <option key={block.property} value={block.property}>{block.label}</option>
                ))}
            </select>
            <select className="sort__select" defaultValue={defaultSort.order} onChange={(e) => {
                const selectedBlock = block.find(block => block.property === defaultSort.property);
                if (selectedBlock) {
                    handleSort(defaultSort.property, e.target.value, selectedBlock.type);
                }
            }}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
        </div>
    )
}

export default Sort;

            {/* {checkedList.length > 0 && <button onClick={() => noteListProps.deleteMultiple(checkedList)} className="delete">Delete Multiple</button>} */}
