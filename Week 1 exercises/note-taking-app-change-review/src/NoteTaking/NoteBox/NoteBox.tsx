import Card from "../../shared/Card/Card";
import NoteForm from "./NoteForm/NoteForm";
import NoteTaking from "./NoteTaking/NoteTaking";

const styles = {
    padding: '40px'
};

function NoteBox() { 
    return (
        <Card style={styles}>
            <NoteTaking />
            <NoteForm />
        </Card>
    )
}

export default NoteBox;