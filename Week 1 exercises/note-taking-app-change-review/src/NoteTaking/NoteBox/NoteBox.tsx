import Card from "../../shared/Card/Card";
import NoteForm from "./NoteForm/NoteForm";
import NoteTaking from "./NoteTaking/NoteTaking";

function NoteBox() { 
    const styles = {
        padding: '40px'
    }
    return (
        <Card style={styles}>
            <NoteTaking />
            <NoteForm />
        </Card>
    )
}

export default NoteBox;