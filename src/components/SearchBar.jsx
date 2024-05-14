import React from "react";
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import FilmFranchise from "./AllFilms";
import Title from "./Title";
import AllFilms from "./AllFilms";


const apiKey = "e52feb2";
const url = "http://www.omdbapi.com/";

class SearchBar extends React.Component {
    state = {
        searchQuery: 'Harry Potter',
        Movies: []
    }

    // injectMovies = () => {
    //     const searchFilms = document.querySelector('.searchFilms');
    //     searchFilms.innerHTML = `<FilmFranchise franchise=${this.state.searchQuery} />`
    // }

    getData = () => {
        fetch('http://www.omdbapi.com/' + `?s=${this.state.searchQuery}` + `&apiKey=${apiKey}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Data received:', data);
                this.setState({ Movies: data.Search });
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }

    render() {
        return (
            <div>
                <Form  className="searchBar" onSubmit={(e) => {
                    e.preventDefault();
                    this.getData();
                    this.setState({
                        searchQuery: this.state.searchQuery
                    })
                    console.log('form submitted');
                    setTimeout(() => console.log(this.state.Movies), 3000);
                }}
                > {/* On form submit something must happen */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="d-none"></Form.Label>
                        <Form.Control type="text" placeholder="Search and press enter" value={this.state.searchQuery} onChange={(e) => {
                            this.setState({
                                // ...this.state.searchQuery,
                                searchQuery: e.target.value
                            })
                            console.log(this.state.searchQuery)
                        }} />
                    </Form.Group>
                    <Button className="d-none" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Title />
                <AllFilms searchText={this.state.searchQuery} />
            </div>
        )
    }
}

export default SearchBar;
