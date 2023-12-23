import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from 'react-bootstrap';

const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0Mzg0NGI1MjViYjAwMThlZDA3ZDUiLCJpYXQiOjE3MDMxNzE1OTgsImV4cCI6MTcwNDM4MTE5OH0.19JGKqZEjq_wmFal7XJVWRdL6nCr4XKaXSvbqKCpzB0"
const endPointUrl = "https://striveschool-api.herokuapp.com/api/comments"



class SingleFilm extends React.Component {
    state = {
        selected: false,
        comments: [],
        review: {
            comment: '',
            rate: 1,
            elementId: this.props.filmName.imdbID
        }
    }

    displayComments = () => {
        const modalWindow = document.querySelector(".modalWindow");
        const commentsWindow = document.getElementById('commentsWindow');
        const backdrop = document.querySelector(".backdrop");
        setTimeout(() => {
            modalWindow.classList.toggle('showModal');
            backdrop.classList.toggle('showModal');
            for (let i = 0; i < this.state.comments.length; i++) {
                commentsWindow.innerHTML += `
                                        <div class="d-flex justify-content-between singleComment">
                                            <p>${this.state.comments[i].comment}</p>
                                            <p>${this.state.comments[i].rate}</p>
                                        </div>
                                    `
            }
        }, 250)

    }

    getComments = async (_id) => {
        try {
            const response = await fetch(`${endPointUrl}/${_id}`, {
                headers: {
                    Authorization: apiKey,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            this.setState({
                comments: data
            })
            // console.log(this.state.comments);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    printData = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state.review));
    }

    populateModal = () => {

    }

    render() {
        return (
            <>
                <Col xs={12} sm={6} md={4} lg={2} key={this.props.filmName.imdbID}>
                    <Card id={this.props.filmName.imdbID} onClick={() => {
                        localStorage.setItem('itemId', this.state.review.elementId)
                        this.setState({ selected: true });
                        this.getComments(this.state.review.elementId);
                        this.getComments(this.state.review.elementId);
                        this.displayComments();
                    }}
                        style={{ border: this.state.selected ? '3px solid red' : 'none' }}>
                        <Card.Img variant="top" src={this.props.filmName.Poster} />
                        <Card.Title className="d-none">{this.props.filmName.Title}</Card.Title>
                    </Card>
                </Col>
            </>
        )
    }
}

export default SingleFilm;