import React from "react";
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

class SearchBar extends React.Component {
    render() {
        return (
            <Form onSubmit={(e) => {
                e.preventDefault();
                console.log('form submitted');
            }}
                > {/* On form submit something must happen */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="d-none"></Form.Label>
                    <Form.Control type="text" placeholder="Search and press enter" />
                </Form.Group>
                <Button className="d-none" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default SearchBar;