import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from 'react-bootstrap';

class SingleFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }
    render() {
        return (
            <>
                <Col xs={12} sm={6} md={4} lg={2} key={this.props.filmName.imdbID}>
                    <Card id={this.props.filmName.imdbID}>
                        <Card.Img variant="top" src={this.props.filmName.Poster} onClick={() => this.setState({ selected: !this.state.selected })}
                            style={{ border: this.state.selected ? '3px solid red' : 'none' }} />
                        <Card.Title className="d-none">{this.props.filmName.Title}</Card.Title>
                    </Card>
                </Col>
            </>
        )
    }
}

export default SingleFilm;