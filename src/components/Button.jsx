import { Link } from "react-router-dom"

export function Button({text = '', onClick, isWhite = true, type = '', className = ''}) {
    const style = {
        color: isWhite ? "#fff" : "#175CD3"
    }
    return (
        <>
            <button
                type={ type }
                className={ className }
                style={style}
                onClick={onClick}
            >{ text } </button>
        </>
    )
}

export function AuthLinkButton({title = '', path = '', isWhite = true, className = ''}) {
    const style = {
        color: isWhite ? "#fff" : "#175CD3"
    }
    return (
        <>
            <Link
                to={path}
                className={ className }
                style={style}
            > { title } </Link>
        </>
    )
}