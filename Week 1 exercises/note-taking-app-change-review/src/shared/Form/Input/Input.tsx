import Select from "react-select";
import { FormField } from "../Form.const";

function Input(inputForm: FormField) {
    return (
        inputForm.type === 'text' ? <input className="form__input" name={inputForm.property} type={inputForm.type} placeholder={inputForm.placeholder} />
            : inputForm.type === 'textarea' ? <textarea className="form__textarea" name={inputForm.property} placeholder={inputForm.placeholder}></textarea>
                : inputForm.type === 'multiSelect' ? <Select
                    isMulti
                    closeMenuOnSelect={false}
                    options={inputForm.options ? inputForm.options : []}
                    value={inputForm.value ? inputForm.value : []}
                    className="form__multi-select"
                // onChange={handleChangeTags}
                /> : <></>
    )
}

export default Input;