export type SortBlock = {
    property: string;
    type: string;
    label: string;
};

export type SortProps = {
    sort: string;
    order: string;
    onSort: (sortType: string, sortLabel: string, data: []) => void;
    data: [];
    block: SortBlock[];
    defaultSort: {
        property: string;
        order: string;
    };
};

