import { Link } from 'react-router-dom'
import './header.css'


function Header() {
    return (
        <div className='header'>
            <Link className='logo' to='/'>Prime flix</Link>
            <Link className='favoritos' to='/favoritos'>Meus filmes</Link>
        </div>
    )
}

export default Header