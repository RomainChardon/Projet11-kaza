import json from "../assets/json/logements.json"
import {useParams} from "react-router-dom";
import NotFound from "./NotFound.jsx";
import CarouselLogement from "../components/CarouselLogement.jsx";
import Tags from "../components/Tags.jsx";
import Host from "../components/Host.jsx";
import fullStar from "../assets/img/star-active.png";
import emptyStar from "../assets/img/star-inactive.png";
import Collapse from "../components/Collapse.jsx";

function Location() {
    const { id } = useParams();

    const location = json.find((element) => element.id === id);
    if (!location) {
        return <NotFound />
    } else {
        return (
            <div>
                <CarouselLogement
                    imgs={location.pictures}
                />
                <div className="location-content">
                    <div className="detail-container">
                        <div className="location-container">
                            <h1>{location.title}</h1>
                            <p>{location.location}</p>
                            <div className="tags-container">
                                {location.tags.map(item => (
                                    <Tags
                                        key={item}
                                        title={item}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="host">
                            <Host
                                host={location.host}
                            />
                            <div className="star-group">
                                {[...Array(5)].map((star, i) => {
                                    let rate = i + 1;
                                    return (<img key={i} src={rate <= location.rating ? fullStar : emptyStar}/>)
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="more">
                        <Collapse
                            title="Description"
                            element={[location.description]}
                        />
                        <Collapse
                            title="Equipement"
                            element={location.equipments.map((equipement, index) => (
                                <div key={index}>{equipement}</div>
                            ))}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Location
