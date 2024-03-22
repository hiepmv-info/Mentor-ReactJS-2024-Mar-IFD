import { InfoBlock } from "./Info.const";
import './Info.css';

function Info({ info }: { info: InfoBlock[] }) {
    return (
        <div>
            {info.map((block, i) => {
                const content = block[block.property];
                const isTextOrDate = block.type === "text" || block.type === "date";
                const isMultiSelect = block.type === "multiSelect";

                return (
                    <div key={i}>
                        {isTextOrDate && <p className="info-content">{block.label} {content}</p>}
                        {isMultiSelect && Array.isArray(content) && content.map((tag: string, index: number) => (
                            <span key={index} className="info-multi">{tag}</span>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default Info;