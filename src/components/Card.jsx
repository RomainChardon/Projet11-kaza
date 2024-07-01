import {useNavigate} from "react-router-dom";

function Card({ id, title, cover }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/location/${id}`);
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default Card;
