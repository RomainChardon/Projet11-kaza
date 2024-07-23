import {useState} from "react";
import fleche from "../assets/img/fleche.png";

function Collapse({title, element}) {

    const [isOpened, setIsOpened] = useState(false);
    const [rotate, setRotate] = useState('');

    const showCollapse = () => {
        if (isOpened === true) {
            setIsOpened(false)
            setRotate('')
        } else {
            setIsOpened(true)
            setRotate('fleche-rotate')
        }
    }

    return (
        <div className="collapse">
            <div onClick={showCollapse} className="collapse-title">
                <p>{title}</p>
                <img src={fleche} alt="fleche" className={rotate}/>
            </div>
            {
                isOpened ? <div className="collapse-element">{element}</div> : ""
            }
        </div>
    )
}

export default Collapse;
