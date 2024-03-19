export type Note = {
    id: number;
    title: string;
    content: string;
}

export type NoteListProps = {
    notes: Note[];
    edit: (note: Note) => void;
    delete: (note: Note) => void;
}

export type NoteFormProps = {
    create: (note: Note) => void;
    edit: (note: Note) => void;
    note: Note | null;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}