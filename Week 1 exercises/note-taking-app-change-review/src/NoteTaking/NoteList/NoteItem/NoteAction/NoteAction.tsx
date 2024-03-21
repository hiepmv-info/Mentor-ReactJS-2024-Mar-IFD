import Button from "../../../../shared/Button/Button";

function NoteAction() {
    const handleClickEdit = () => {
        console.log("Edit note");
    }
    const handleClickDelete = () => {
        console.log("Delete note");
    }
    return (
        <div>
            <Button label="Edit" className="button-info" onClick={handleClickEdit} />
            <Button label="Delete" className="button-delete ml-20" onClick={handleClickDelete} />
        </div>
    )
}

export default NoteAction;