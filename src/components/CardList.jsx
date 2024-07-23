import json from "../assets/json/logements.json";
import Card from "./Card.jsx";

function CardList() {
    return (
        <div className='card-container'>
            <div className="card-list">
                {json.map(item => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        cover={item.cover}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardList;
