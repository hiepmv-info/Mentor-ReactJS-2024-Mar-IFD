import Form from "../../../shared/Form/Form";
import { formBlock } from "../../NoteTaking.const";

function NoteForm() {
    const form = formBlock;
    return (
        <Form {...form} />
    )
}

export default NoteForm;