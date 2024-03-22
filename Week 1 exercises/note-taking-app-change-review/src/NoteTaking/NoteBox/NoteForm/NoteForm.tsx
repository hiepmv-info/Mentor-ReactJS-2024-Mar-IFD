import { useContext } from "react";
import Form from "../../../shared/Form/Form";
import { NoteContext } from "../../NoteTaking.const";
import { FormProps } from "../../../shared/Form/Form.const";

function NoteForm() {
    const { formContext } = useContext(NoteContext);
    const formProps: FormProps = {
        type: formContext.title.includes("Edit") ? "edit" : "add",
        formBlock: formContext.formBlock,
        data: formContext.note,
        onSubmit: formContext.onSubmit
    }
    
    return (
        <Form {...formProps} />
    )
}

export default NoteForm;