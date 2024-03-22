import { useCallback } from "react";
import { SortProps } from "./Sort.const";
import "./Sort.css";

interface IndexableType {
    [key: string]: string | Date | number | string[];
}

function Sort<T extends IndexableType>({ data, onSort, defaultSort, block }: SortProps<T>) {
    const handleSort = useCallback((sortType: string, sortOrder: string, type: string) => {
        const sortedList = [...data].sort((a: T, b: T) => {
            if (type === "string") {
                return (a[sortType] as string).localeCompare(b[sortType] as string);
            } else if (type === "date") {
                return new Date(a[sortType] as string).getTime() - new Date(b[sortType] as string).getTime();
            }
            return 0;
        });

        if (sortOrder === "Descending") {
            sortedList.reverse();
        }

        onSort(sortType, sortOrder, sortedList);
    }, [data, onSort]);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, isProperty: boolean) => {
        const selectedBlock = block.find(block => block.property === (isProperty ? e.target.value : defaultSort.property));
        if (selectedBlock) {
            handleSort(isProperty ? e.target.value : defaultSort.property, isProperty ? defaultSort.order : e.target.value, selectedBlock.type);
        }
    }

    return (
        <div className="sort">
            <span className="sort__span">Sort by</span>
            <select className="sort__select" defaultValue={defaultSort.property} onChange={(e) => handleSelectChange(e, true)}>
                {block.map((block) => (
                    <option key={block.property} value={block.property}>{block.label}</option>
                ))}
            </select>
            <select className="sort__select" defaultValue={defaultSort.order} onChange={(e) => handleSelectChange(e, false)}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
        </div>
    )
}

export default Sort;