import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0Mzg0NGI1MjViYjAwMThlZDA3ZDUiLCJpYXQiOjE3MDMxNzE1OTgsImV4cCI6MTcwNDM4MTE5OH0.19JGKqZEjq_wmFal7XJVWRdL6nCr4XKaXSvbqKCpzB0"
const endPointUrl = "https://striveschool-api.herokuapp.com/api/comments"

class ModalWindow extends React.Component {
    state = {
        comments: [],
        review: {
            comment: '',
            rate: 1,
            elementId: ''
        }
    }

    closeModal = () => {
        const modals = document.getElementsByClassName('showModal');
        const commentsWindow = document.getElementById('filmComment');
        for (let i = 0; i < modals.length; i++) {
            modals[i].classList.remove('showModal');
            modals[i].classList.remove('showModal');
        }
        localStorage.clear();
        commentsWindow.innerHTML = ''
        window.location.reload();
    }

    postData = async () => {
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
            // console.log(data);
            alert('Comment sent');
            this.setState({
                comment: '',
                rate: 1,
                elementId: localStorage.getItem('itemId')
            })

        } catch (error) {
            console.log("Error: ", error);
        }
    }

    render() {
        return (
            <>
                <div className="backdrop"></div>
                <div className="modalWindow">
                    {/* Iniezione di paragrafi e container in base al numero di commenti */}
                    <div>
                        <h4>COMMENTI</h4>
                        <div id="commentsWindow"></div>
                    </div>
                    <div>
                        {/* Form per submission di commenti */}
                        <Form onSubmit={() => {
                            // event.preventDefault();
                            this.setState({
                                ...this.state.review,
                                elementId: localStorage.getItem('itemId')
                            })
                            this.postData();
                            setTimeout(this.closeModal, 500);
                        }}>
                            <Form.Group controlId="filmComment">
                                <Form.Control rows={7} className="mb-3" as="textarea" type="text" placeholder="Lascia un commento" value={this.state.review.comment} onChange={(e) => {
                                    this.setState({
                                        review: {
                                            ...this.state.review,
                                            comment: e.target.value,
                                            elementId: localStorage.getItem('itemId')
                                        }
                                    });
                                    // Print to console review value while typing
                                    // console.log(this.state.review);
                                }}></Form.Control>
                                <Form.Select type="select" placeholder="Insert a comment" value={this.state.review.rate} onChange={(e) => {
                                    this.setState({
                                        review: {
                                            ...this.state.review,
                                            rate: e.target.value
                                        }
                                    });
                                }}>
                                    <option>Select a rating</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </Form.Select>
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Button type="submit" className="formButton">Submit</Button>
                                <Button type="button" className="formButton" onClick={this.closeModal}>Close</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </>
        )
    }
}

export default ModalWindow;