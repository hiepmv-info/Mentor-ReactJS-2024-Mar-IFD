import { CSSProperties } from "react";
import Card from "../../../shared/Card/Card";
import NoteAction from "./NoteAction/NoteAction";
import NoteCheckbox from "./NoteCheckbox/NoteCheckbox";
import NoteInfo from "./NoteInfo/NoteInfo";
import "./NoteItem.css";
import { Note } from "../../NoteTaking.const";

function NoteItem(note: Note) {
    const style: CSSProperties = {
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "25px 20px 25px 40px"

    }
    const noteCheckBoxProps = {
        checked: false,
        onChange: () => console.log("checked"),
    };
    return (
        <Card style={style}>
            <div className="checkbox-info">
                <NoteCheckbox {...noteCheckBoxProps} />
                <NoteInfo {...note} />
            </div>

            <NoteAction />
        </Card>
    );
}

export default NoteItem;