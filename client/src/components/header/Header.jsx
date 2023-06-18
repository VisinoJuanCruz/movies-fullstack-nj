export const Header = () => {
    return (
    //navbar
    <div className="navbar">
        <div className="navbar-start">
            <a className="navbar-item">
                Pokemons
            </a>
            <a className="navbar-item">
                Cities
            </a>
            <a className="navbar-item">
                Habilities
            </a>
        </div>
        <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                        Log in
                    </a>

                </div>
            </div>
        </div>

    </div>
  );
}