export type Note = {
    id: number;
    title: string;
    content: string;
    tags: string[];
    createdDate: string;
    updatedDate: string;
}

export type NoteListProps = {
    notes: Note[];
    edit: (note: Note) => void;
    delete: (note: Note) => void;
    deleteMultiple: (ids: number[]) => void;
}

export type NoteFormProps = {
    create: (note: Note) => void;
    edit: (note: Note) => void;
    note: Note | null;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export function formatDate(date: Date) {
    return date.toISOString().split('T')[0];
}

export type NoteSearchProps = {
    search: (searchText: string, searchType: string) => void;
}