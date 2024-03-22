export type SearchProps<T> = {
    onChange: (data: T[]) => void;
    searchBlock: SearchBlock[];
    data: T[];
    searchBy?: string;
};

export type SearchBlock = {
    property: string;
    type: string;
    label?: string;
    options?: { value: string, label: string }[];
};