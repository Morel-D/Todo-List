import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="bg-light">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo text-dark mx-3">Todo List</Link>
        </div>
      </nav>
     );
}
 
export default Navbar;