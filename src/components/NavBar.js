// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


import { NavLink, Link,} from 'react-router-dom';

import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <Link to='/'></Link>
            <div>
                <NavLink to={`/category/men's clothing`}><h4>Ropa de Hombre</h4></NavLink>
                <NavLink to={`/category/jewelery`}><h4>Joyeria</h4></NavLink>
                <NavLink to={`/category/electronics`}><h4>Electronica</h4></NavLink>
                <NavLink to={`/category/women's clothing`}><h4>Ropa de Mujer</h4></NavLink>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;