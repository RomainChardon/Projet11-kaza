import {Link} from "react-router-dom";

function Card({ id, title, cover }) {

    return (
        <Link to={`/location/${id}`} className="card">
            <img src={cover} alt={title} />
            <p>{title}</p>
        </Link>
    )
}

export default Card;
