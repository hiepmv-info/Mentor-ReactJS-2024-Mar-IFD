export type Option = {
    value: string;
    label: string;
}

export type FormField = {
    property: string;
    value: any;
    type: string;
    placeholder: string;
    options?: Option[];
    className?: string;
}

export type FormBlock = {
    title: string;
    formFields: FormField[];
}
