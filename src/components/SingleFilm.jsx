import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0Mzg0NGI1MjViYjAwMThlZDA3ZDUiLCJpYXQiOjE3MDMxNzE1OTgsImV4cCI6MTcwNDM4MTE5OH0.19JGKqZEjq_wmFal7XJVWRdL6nCr4XKaXSvbqKCpzB0"
const endPointUrl = "https://striveschool-api.herokuapp.com/api/comments"



class SingleFilm extends React.Component {
    state = {
        // selected: false,
        review: {
            comment: '',
            rating: 1,
            elementId: this.props.filmName.imdbID
        }

    }


    displayComments = () => {
        // Opens window with comments
    }

    printData = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state.review));
    }

    selectItem = () => {

    }

    postData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(endPointUrl, {
                method: "POST",
                body: JSON.stringify(this.state.review),
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: apiKey,
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            alert('Comment sent');
            this.setState({
                comment: '',
                rating: 1,
                elementId: this.props.filmName.imdbID
            })

        } catch (error) {
            console.log("Error: ", error);
        }
    }

    render() {
        return (
            <>
                <Col xs={12} sm={6} md={4} lg={2} key={this.props.filmName.imdbID}>
                    <Card>
                        <Card.Img variant="top" src={this.props.filmName.Poster} onClick={() => this.setState({ selected: !this.state.selected })}
                            style={{ border: this.state.selected ? '3px solid red' : 'none' }} />
                        <Card.Title className="d-none">{this.props.filmName.Title}</Card.Title>
                        {/* <Form onSubmit={this.printData}>
                            <Form.Group controlId="filmComment">
                                <Form.Control type="text" placeholder="Insert a comment" value={this.state.review.comment} onChange={(e) => this.setState({
                                    review: {
                                        ...this.state.review,
                                        comment: e.target.value
                                    }
                                })}></Form.Control>
                                <Form.Select type="select" placeholder="Insert a comment" value={this.state.review.rating} onChange={(e) => this.setState({
                                    review: {
                                        ...this.state.review,
                                        rating: e.target.value
                                    }
                                })}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Select>
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form> */}
                    </Card>
                </Col>
            </>
        )
    }
}

export default SingleFilm;