import { ButtonProps } from "./Button.const";
import './Button.css';

function Button(buttonProps: ButtonProps) {
    return (
        <button
            className={buttonProps.className}
            onClick={buttonProps.onClick}
        >
            {buttonProps.label}
        </button>
    );
}

export default Button;