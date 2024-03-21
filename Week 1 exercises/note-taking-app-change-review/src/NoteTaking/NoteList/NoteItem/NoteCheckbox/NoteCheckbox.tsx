import { NoteCheckboxProps } from "../../../NoteTaking.const";

function NoteCheckbox({ checked, onChange }: NoteCheckboxProps) {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="NoteCheckbox"
        />
    );
}

export default NoteCheckbox;