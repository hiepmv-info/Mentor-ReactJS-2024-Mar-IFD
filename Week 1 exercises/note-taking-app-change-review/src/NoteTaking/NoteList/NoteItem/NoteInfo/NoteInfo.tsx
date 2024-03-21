import Info from "../../../../shared/Info/Info";
import { Note, NoteInfoBlock } from "../../../NoteTaking.const";

function NoteInfo(note: Note) {
    const noteInfo = NoteInfoBlock.map((block) => {
        return {
            property: block.property,
            type: block.type,
            [block.property]: note[block.property],
            label: block.label
        }
    });
    return (
       <Info info={noteInfo} />
    );
}

export default NoteInfo;