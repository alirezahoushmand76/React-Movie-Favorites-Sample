import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css"
import { useMovieContext } from "../contexts/MovieContext";

function NavBar() {
    const location = useLocation();
    const { favorites } = useMovieContext();
    
    const isActive = (path) => location.pathname === path;
    
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
            </Link>
            <Link to="/favorites" className={`nav-link ${isActive('/favorites') ? 'active' : ''}`}>
                Favorites
                {favorites.length > 0 && (
                    <span className="favorites-count">{favorites.length}</span>
                )}
            </Link>
        </div>
    </nav>
}

export default NavBar;