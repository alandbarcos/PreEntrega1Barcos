import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
    return (
    <>
        <Navbar expand="lg" className="navBar">
        <Container fluid>
            <Navbar.Brand className="navLogo" href="#">Grace Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Inicio</Nav.Link>
                <NavDropdown title="Catálogo" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"></NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">Contacto</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <CartWidget/>
        </Container>
        </Navbar>
    </>
    );
}

export default NavBar;