import json from "../logements.json"
import {useParams} from "react-router-dom";
import NotFound from "./NotFound.jsx";
import CarouselLogement from "../components/CarouselLogement.jsx";
import Tags from "../components/Tags.jsx";
import Host from "../components/Host.jsx";
import Rating from "../components/Rating.jsx";

function Location() {
    const { id } = useParams();

    const location = json.find((element) => element.id === id);
    console.log(location)
    if (!location) {
        return <NotFound />
    } else {
        return (
            <div>
                <CarouselLogement
                    imgs = {location.pictures}
                />
                <div className="detail-container">
                    <div>
                        <h1>{location.title}</h1>
                        <p>{location.location}</p>
                        <div className="tags-container">
                            {location.tags.map(item => (
                                <Tags
                                    title={item}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <Host
                            host={location.host}
                        />
                        <Rating
                            rating={location.rating}
                        />
                    </div>
                </div>

                {/* TODO : Collapse */}
            </div>
        )
    }
}

export default Location
