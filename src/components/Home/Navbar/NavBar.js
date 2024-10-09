import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import bar from "../../../images/plumber.png"

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{width:"50px"}} className="mx-5" href="#home"> <img src={bar} alt="" className="img-fluid"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="mx-5" id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/home"><h5>Home</h5></Nav.Link>
                    <Nav.Link href="/admin"><h5>Admin</h5></Nav.Link>
                    <Nav.Link href="/review"><h5>Review</h5></Nav.Link>
                    <Nav.Link href="/orders"><h5>Orders</h5></Nav.Link>
                    <Nav.Link href="/blog"><h5>Blog</h5></Nav.Link>
                    <Nav.Link href="/login"><h5>Login</h5></Nav.Link>
                    <Nav.Link href="/logout"><h5>LogOut</h5></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;