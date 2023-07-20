import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom'
import './NavBar.css';

function NavBar() {
    return (
    <>
        <Navbar expand="lg" className="navBar">
        <Container fluid>
            <Navbar.Brand as ={NavLink} className="navLogo" to="/"><img src="/logo.jpeg" alt="Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link as ={NavLink} to="/">Inicio</Nav.Link>
                <NavDropdown title="Catálogo" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"></NavDropdown.Item>
                <NavDropdown.Item as ={NavLink} to="/categoria/Mochilas">
                    Mochilas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as ={NavLink} to="/categoria/Cartucheras">
                    Cartucheras
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as ={NavLink} to="/categoria/Marcadores">
                    Marcadores
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as ={NavLink} to="/categoria/Carpetas">
                    Carpetas
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as ={NavLink} to="/contacto">Contacto</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <CartWidget/>
        </Container>
        </Navbar>
    </>
    );
}

export default NavBar;