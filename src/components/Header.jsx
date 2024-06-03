import { Link } from 'react-router-dom'
import logo from '../assets/kasa_logo_small.png'

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="Logo Kasa"/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </div>

    )
}

export default Header
