import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="bg-light">
        <div className="nav-wrapper">
          <Link to="/"><a href="#" className="brand-logo text-dark mx-3">Todo List</a></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/aboutUs"><label href="badges.html" className="text-dark mx-5">About Us</label></NavLink></li>       
            <li><NavLink to="/details"><label href="badges.html" className="text-dark mx-5">Details</label></NavLink></li> 
          </ul>
        </div>
      </nav>
     );
}
 
export default Navbar;