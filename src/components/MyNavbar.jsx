import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from "react-bootstrap";
import SearchBar from "./SearchBar";



class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className="align-items-center leftNavbar">
                    <div className="d-flex">
                        <Navbar.Brand href="#home">
                            <Image src="../logo.png" alt="netflix logo" /> {/* da risolvere */}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#tvShows">TV Shows</Nav.Link>
                                <Nav.Link href="#movies">Movies</Nav.Link>
                                <Nav.Link href="#recentlyAdded">Recently Added</Nav.Link>
                                <Nav.Link href="#myList">My List</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div className="d-flex align-items-center rightNavbar">
                        <Nav className="me-auto rightMenu">
                            <SearchBar />
                            <Nav.Link href="#kids">KIDS</Nav.Link>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                            </div>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        )
    }
}


export default MyNavbar;
