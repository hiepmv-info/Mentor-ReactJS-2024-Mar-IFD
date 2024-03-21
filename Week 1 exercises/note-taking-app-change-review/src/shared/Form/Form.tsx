import Card from "../Card/Card";
import './Form.css';
import { FormBlock } from "./Form.const";
import Input from "./Input/Input";
import Button from "../Button/Button";

function Form(formBlock: FormBlock) {
    const style = {
        width: '500px',
        margin: 'auto',
    }
    const handleClick = () => {
        console.log('clicked');
    }
    return (
        <Card style={style}>
            <form className="form">
                <span className="form__span">{formBlock.title}</span>
                {formBlock.formFields.map((field, index) => (
                    <Input key={index} className="form__input" property={field.property} type={field.type} placeholder={field.placeholder} value={field.value} />
                ))}
                <Button className="button-info" onClick={handleClick} label="Save" />
                {/* {showCancelButton && (<button onClick={handleCancel} className="cancel">Cancel</button>)} */}
            </form>
        </Card>
    )
}

export default Form;