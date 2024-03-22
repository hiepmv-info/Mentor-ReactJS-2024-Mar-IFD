import { CSSProperties, useContext } from "react";
import Card from "../../../shared/Card/Card";
import NoteCheckbox from "./NoteCheckbox/NoteCheckbox";
import NoteInfo from "./NoteInfo/NoteInfo";
import "./NoteItem.css";
import { Note, NoteContext } from "../../NoteTaking.const";
import Button from "../../../shared/Button/Button";

const style: CSSProperties = {
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "25px 20px 25px 40px"
};

function NoteItem(note: Note) {
    const { itemContext } = useContext(NoteContext);

    return (
        <Card style={style}>
            <div className="checkbox-info">
                <NoteCheckbox id={note.id} />
                <NoteInfo {...note} />
            </div>
            <div>
                <Button label="Edit" className="button-info" onClick={() => itemContext.onChangeEdit(note)} />
                <Button label="Delete" className="button-delete ml-20" onClick={() => itemContext.onDelete(note)} />
            </div>
        </Card>
    );
}

export default NoteItem;