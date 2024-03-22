import Card from "../Card/Card";
import "./Form.css";
import { FormProps } from "./Form.const";
import Input from "./Input/Input";
import Button from "../Button/Button";
import { FormEvent, useEffect, useState } from "react";

function Form({ formBlock, data, onSubmit, type }: FormProps) {
    const [dataForm, setData] = useState(data);
    const [dataFormBlock, setDataFormBlock] = useState(formBlock.formFields);

    useEffect(() => {
        setData(data);
        setDataFormBlock(formBlock.formFields);
    }, [data, formBlock]);

    const handleValueChange = (property: string, value: string | string[]) => {
        setDataFormBlock(
            dataFormBlock.map((field) =>
                field.property === property ? { ...field, value } : field
            )
        );
        setData({ ...dataForm, [property]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newDataForm: { [key: string]: any } = type === "add"
            ? dataForm
            : dataFormBlock.reduce(
                (acc: { [key: string]: any }, field) => ({ ...acc, [field.property]: field.value }),
                { id: data.id }
            );
        Object.keys(data).forEach((key) => {
            if (!newDataForm[key]) {
                newDataForm[key] = data[key];
            }
        });
        onSubmit(newDataForm, type);
    };

    return (
        <Card style={{ width: "500px", margin: "auto" }}>
            <form className="form" onSubmit={handleSubmit}>
                <span className="form__span">{formBlock.title}</span>
                {dataFormBlock.map((field, index) => (
                    <Input
                        key={index}
                        className="form__input"
                        property={field.property}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.value}
                        options={field.options}
                        onChangeValue={(e) => handleValueChange(field.property, e)}
                    />
                ))}
                <Button className="button-info" label="Save" />
            </form>
        </Card>
    );
}

export default Form;
