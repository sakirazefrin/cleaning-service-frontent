import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { UserContext } from '../../../App';


const AdminNav = () => {

    ///Session Storage is More Efficient In some cases


    // let [admin, setAdmin] = useState(false)
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // const [isAdmin, setIsAdmin] = useState(false)

    // if (!loggedInUser.email) {
    //     const newUser = {
    //         email: sessionStorage.getItem("email")
    //     }
    //     setLoggedInUser(newUser)
    // }
    // useEffect(() => {
    //     fetch("https://expressclean.herokuapp.com/checkIsAdmin", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setIsAdmin(data)
    //             setAdmin(data)
    //         })
    // }, [loggedInUser.email])

    const admin=sessionStorage.getItem("admin")
    
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{ width: "50px" }} className="mx-5" href="#home">Express-Clean</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="mx-5" id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/"><h5>Home</h5></Nav.Link>
                    {
                        (admin==="false") && <Nav.Link href="/orders"><h5>Orders</h5></Nav.Link>
                    }
                    {
                        (admin==="true") && <div className="d-flex"><Nav.Link href="/admin/addAdmin"><h5>Add Admin</h5></Nav.Link>
                            <Nav.Link href="/admin/addBlog"><h5>Add Blog</h5></Nav.Link>
                            <Nav.Link href="/admin/orderMaintain"><h5> Admin Orders</h5></Nav.Link>
                            <Nav.Link href="/admin/addService"><h5> Add Service</h5></Nav.Link>
                            
                            </div>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AdminNav;