import {useState} from "react";
import logo from '../assets/img/fleche.png'

function CarouselLogement(imgs) {
    const [picture, setPicture] = useState(0);

    const prevClick = () => {
        if (picture - 1 < 0) {
            setPicture(imgs.imgs.length - 1)
        } else {
            setPicture( picture - 1 )
        }
    }

    const nextClick = () => {
        if (picture + 1 >  imgs.imgs.length - 1) {
            setPicture(0)
        } else {
            setPicture( picture + 1 )
        }
    }

    if (imgs.imgs.length > 1) {
        return (
            <div id="carousel">
                <div onClick={prevClick}>
                    <img src={logo} alt="fleche"/>
                </div>
                <img src={imgs.imgs[picture]}/>
                <span className='compteur'>{picture + 1}/{imgs.imgs.length}</span>
                <div onClick={nextClick}>
                    <img src={logo} alt="fleche"/>
                </div>
            </div>
        )
    } else {
        return (
            <div id="carousel">
                <img src={imgs.imgs[picture]}/>
            </div>
        )
    }


}

export default CarouselLogement;
