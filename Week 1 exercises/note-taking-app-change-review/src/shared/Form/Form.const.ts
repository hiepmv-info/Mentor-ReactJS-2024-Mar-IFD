export type Option = {
    value: string;
    label: string;
}

export type InputBlock = {
    property: string;
    value: any;
    type: string;
    placeholder: string;
    options?: Option[];
    className?: string;
    onChangeValue: (value: string | string[]) => void;
}

export type FormBlock = {
    title: string;
    formFields: InputBlock[];
}

export type FormProps = {
    type: string;
    formBlock: FormBlock;
    data: any;
    onSubmit: (data: any, type: string) => void;
}
