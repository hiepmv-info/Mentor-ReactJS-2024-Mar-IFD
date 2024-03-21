import { createContext } from "react";
import { FormBlock } from "../shared/Form/Form.const";
import { InfoBlock } from "../shared/Info/Info.const";

export type Note = {
    id: number;
    title: string;
    content?: string;
    tags: string[];
    createdDate: string;
    updatedDate: string;
}

export const formBlock: FormBlock = {
    title: 'Create Note',
    formFields: [
        {
            property: 'title',
            value: '',
            type: 'text',
            placeholder: 'Title',
            className: 'form__input'
        },
        {
            property: 'content',
            value: '',
            type: 'textarea',
            placeholder: 'Content',
            className: 'form__textarea'
        },
        {
            property: 'tags',
            value: '',
            type: 'multiSelect',
            placeholder: 'Tags',
            options: [
                { value: 'tag1', label: 'tag1' },
                { value: 'tag2', label: 'tag2' },
                { value: 'tag3', label: 'tag3' },
                { value: 'tag4', label: 'tag4' },
            ],
            className: 'form__multi-select'
        }
    ]
}

export type NoteCheckboxProps = {
    checked: boolean;
    onChange: () => void;
}

export const NoteInfoBlock: InfoBlock[] = [
    {
        property: 'title',
        type: 'text',
    },
    {
        property: 'content',
        type: 'text'
    },
    {
        property: 'tags',
        type: 'multiSelect'
    },
    {
        property: 'createdDate',
        type: 'date',
        label: 'Created Date'
    },
    {
        property: 'updatedDate',
        type: 'date',
        label: 'Updated Date'
    }
];

export const NoteSortContext = createContext({
    sort: 'title',
    order: 'Ascending',
    onSort: (sort: string, order: string, notes: Note[]) => { },
    notes: [],
});