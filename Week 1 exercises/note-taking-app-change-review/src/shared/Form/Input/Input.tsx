import Select from "react-select";
import { InputBlock } from "../Form.const";

function Input(inputForm: InputBlock) {
    const handleChange = (e: string | string[]) => {
        inputForm.onChangeValue(e);
    }

    return (
        inputForm.type === 'text' ? <input className="form__input" value={inputForm.value} name={inputForm.property} type={inputForm.type} placeholder={inputForm.placeholder} onChange={(e) => handleChange(e.target.value)} />
            : inputForm.type === 'textarea' ? <textarea className="form__textarea" value={inputForm.value} name={inputForm.property} placeholder={inputForm.placeholder} onChange={(e) => handleChange(e.target.value)}></textarea>
                : inputForm.type === 'multiSelect' ? <Select
                    isMulti
                    closeMenuOnSelect={false}
                    options={inputForm.options ? inputForm.options : []}
                    value={inputForm.value ? inputForm.value.map((v: any) => ({ value: v, label: v })) : []}
                    className="form__multi-select"
                    onChange={(e) => {
                        handleChange(e.map((option: any) => option.value))
                    }}
                /> : <></>
    )
}

export default Input;