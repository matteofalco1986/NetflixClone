import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from "react-bootstrap";
import SearchBar from "./AllFilms";

class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className="align-items-center">
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
                    <div className="d-flex align-items-center">
                        <Nav className="me-auto">
                            <SearchBar />
                            <Nav.Link href="#kids">KIDS</Nav.Link>
                            <Nav.Link href="#kids">Icon1</Nav.Link>
                            <Nav.Link href="#kids">Icon2</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        )
    }
}


export default MyNavbar;