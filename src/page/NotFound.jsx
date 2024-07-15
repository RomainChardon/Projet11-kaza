import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="error">
            <h1 className="error-code">404</h1>
            <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error-link">Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default NotFound
