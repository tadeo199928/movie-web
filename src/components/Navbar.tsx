import { Link } from   "react-router-dom"
import "../css/Navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to = "/">The Movie App</Link>
         </div>
         <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <Link to="https://jose-vasconcelos.vercel.app/" className="nav-link">Portfolio</Link>
         </div>
    </nav>
}


export default NavBar