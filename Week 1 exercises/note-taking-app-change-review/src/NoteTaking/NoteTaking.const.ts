import { createContext } from "react";
import { FormBlock } from "../shared/Form/Form.const";

export type NoteState = {
    sort: string;
    order: string;
    notes: Note[];
    ids: number[];
    title: string;
    selectedNote: Note;
};

export type Note = {
    id: number;
    title: string;
    content?: string;
    tags: string[];
    createdDate: string;
    updatedDate: string;
};

export const formBlock = {
    title: "",
    formFields: [
        {
            property: "title",
            value: "",
            type: "text",
            placeholder: "Title",
            className: "form__input",
            onChangeValue: () => { },
        },
        {
            property: "content",
            value: "",
            type: "textarea",
            placeholder: "Content",
            className: "form__textarea",
            onChangeValue: () => { },
        },
        {
            property: "tags",
            value: "",
            type: "multiSelect",
            placeholder: "Tags",
            options: [
                { value: "tag1", label: "tag1" },
                { value: "tag2", label: "tag2" },
                { value: "tag3", label: "tag3" },
                { value: "tag4", label: "tag4" },
            ],
            className: "form__multi-select",
            onChangeValue: () => { },
        },
    ],
    data: {} as Note,
    onSubmit: () => { },
};

export const NoteInfoBlock = [
    { property: "title", type: "text" },
    { property: "content", type: "text" },
    { property: "tags", type: "multiSelect" },
    { property: "createdDate", type: "date", label: "Created Date" },
    { property: "updatedDate", type: "date", label: "Updated Date" },
];

export const NoteContext = createContext({
    sortContext: {
        sort: "title",
        order: "Ascending",
        onSort: (_sort: string, _order: string, _notes: Note[]) => { },
    },
    searchContext: {
        onSearch: (_notes: Note[]) => { },
        initNoteList: [] as Note[],
    },
    itemContext: {
        onEdit: (_note: Note) => { },
        onDelete: (_note: Note) => { },
        onChangeEdit: (_note: Note) => { },
        onClickCheckbox: (_id: number) => { },
    },
    formContext: {
        formBlock: {} as FormBlock,
        note: {} as Note,
        setNote: (_note: Note) => { },
        title: "",
        onSubmit: (_note: Note, _type: string) => { },
    },
    ids: [] as number[],
    onDeleteMultiple: (_noteIds: number[]) => { },
    notes: [] as Note[],
});
