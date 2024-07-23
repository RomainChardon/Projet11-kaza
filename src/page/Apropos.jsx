import Collapse from "../components/Collapse.jsx";
import json from "../assets/json/about.json";

function Apropos() {
    return (
        <div>
            <div className="about-banner"></div>
            <div className="about-collapse">
                {json.map(item => (
                    <Collapse
                        key={item.id}
                        title={item.id}
                        element={item.text}
                    />
                ))}
            </div>
        </div>
)
}

export default Apropos
