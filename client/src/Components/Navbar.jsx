import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="bg-light">
        <div className="nav-wrapper">
          <Link to="/"><a href="#" className="brand-logo text-dark mx-3">Todo List</a></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/aboutUs"><label href="badges.html" className="text-dark mx-5">About Us</label></Link></li>       
          </ul>
        </div>
      </nav>
     );
}
 
export default Navbar;