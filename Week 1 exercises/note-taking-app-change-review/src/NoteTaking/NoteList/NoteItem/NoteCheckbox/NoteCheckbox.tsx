import { useContext } from "react";
import { NoteContext } from "../../../NoteTaking.const";

function NoteCheckbox({ id }: { id: number}) {
    const { itemContext } = useContext(NoteContext);
    return (
        <input
            type="checkbox"
            onChange={() => itemContext.onClickCheckbox(id)}
            className="NoteCheckbox"
        />
    );
}

export default NoteCheckbox;