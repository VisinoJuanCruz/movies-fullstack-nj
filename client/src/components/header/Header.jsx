import "./Header.css"
import {Link} from 'react-router-dom'

export const Header = () => {


return(
    <header className="mb-5 fixed-top lineUp">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/"><p className="header-name">Gordos Pokemón 🎮 </p></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto nav-menu ">
            <li className="nav-item">
                    <Link className="nav-link" to="/login"><p className="item-nav-menu">Login</p> <span className="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/"><p className="item-nav-menu">Home</p> <span className="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/pokemons" ><p className="item-nav-menu">Pokemons</p>  </Link>
                </li>
            </ul>
        </div>
</nav>
    </header>

)};     