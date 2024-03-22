export type SortBlock = {
    property: string;
    type: string;
    label: string;
};

export type SortProps<T> = {
    sort: string;
    order: string;
    onSort: (sortType: string, sortLabel: string, data: T[]) => void;
    data: T[];
    block: SortBlock[];
    defaultSort: {
        property: string;
        order: string;
    };
};

