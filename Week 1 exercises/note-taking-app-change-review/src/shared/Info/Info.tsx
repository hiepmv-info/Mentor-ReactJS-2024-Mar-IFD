import { InfoBlock } from "./Info.const";
import './Info.css';

function Info({ info }: { info: InfoBlock[] }) {
    return (
        <div>
            {info.map((block, i) => (
                block.type === "text" ? (
                    <p key={i} className="info-content">{block?.label} {block[block.property]}</p>
                ) : block.type === "multiSelect" ? (
                    <div key={i}>
                        {block[block.property].map((tag, index) => (
                            <span key={index} className="info-multi">
                                {tag}
                            </span>
                        ))}
                    </div>
                    ) : block.type === "date" ? (
                        <p key={i} className="info-content">{block.label} {block[block.property]}</p>
                    ) : <></>
            ))}
        </div>
    )
}

export default Info;