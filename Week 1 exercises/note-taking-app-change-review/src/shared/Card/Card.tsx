import './Card.css'

function Card({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) {
    return (
        <div className="card" style={style}>
            {children}
        </div>
    )
}

export default Card