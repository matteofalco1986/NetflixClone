import React from "react";
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'


class Title extends React.Component {
    render() {
        return (
            <Container fluid>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center leftTitle">
                        <h2>TV Shows</h2>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Sagas
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#comedy">Harry Potter</Dropdown.Item>
                                <Dropdown.Item href="#drama">Avengers</Dropdown.Item>
                                <Dropdown.Item href="#thriller">Star Wars</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="d-flex align-items-center rightTitle">
                        <p className="mb-0">icon1</p>
                        <p className="mb-0">icon2</p>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Title;