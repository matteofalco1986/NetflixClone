import React from "react";
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'


class Title extends React.Component {
    render() {
        return (
            <Container fluid>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <h2>TV Shows</h2>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#comedy">Comedy</Dropdown.Item>
                                <Dropdown.Item href="#drama">Drama</Dropdown.Item>
                                <Dropdown.Item href="#thriller">Thriller</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="mb-0">icon1</p>
                        <p className="mb-0">icon2</p>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Title;