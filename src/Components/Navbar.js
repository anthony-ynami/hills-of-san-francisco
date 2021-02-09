
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <NavLink exact to="/" classname="navlink" activeClassName="selected">Home</NavLink>
                <NavLink to="/project" classname="navlink" activeClassName="selected">Project</NavLink>
                <a classname="navlink" href="https://github.com/anthony-ynami/hills-of-san-francisco">Git</a>
                <a classname="navlink" href="ynami.xyz">Portfolio</a>
            </div>
        </nav>
    );
}

export default NavBar;