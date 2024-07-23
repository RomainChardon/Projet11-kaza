import {Link, useLocation} from 'react-router-dom'
import logo from '../assets/img/kasa_logo_small.png'

function Header() {
    let isActive = useLocation().pathname;

    return (
        <div className='header'>
            <img src={logo} alt="Logo Kasa"/>
            <nav>
                <Link to="/" className={ isActive === '/' ? 'active' : '' }>Accueil</Link>
                <Link to="/about" className={ isActive === '/about' ? 'active' : '' }>A Propos</Link>
            </nav>
        </div>

    )
}

export default Header
