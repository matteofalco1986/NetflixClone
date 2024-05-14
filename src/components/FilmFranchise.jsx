import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import SingleFilm from "./SingleFilm";

const apiKey = "e52feb2";
const url = "http://www.omdbapi.com/";

class FilmFranchise extends React.Component {
    constructor(props) {
        console.log('constructor called')
        super(props);
        this.state = {
            films: [],
            selected: false
        }

    }

    componentDidMount = () => {
        console.log('component FilmFranchise did mount');
        fetch('http://www.omdbapi.com/' + `?s=${this.props.franchise}` + `&apiKey=${apiKey}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // console.log('Data received:', data);
                this.setState({ films: data.Search });
                // console.log(this.state.films)
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }

    render() {
        console.log('render')
        // console.log(this.state.films.filter((item, index) => index < 6))

        return (
            <>
                <h3 id={this.props.franchise}>{this.props.franchise}</h3>
                <Container fluid>
                    <Row>
                        {this.state.films.filter((item, index) => index < 6).map((film) => {
                            return (
                                <>
                                    <SingleFilm filmName={film} />
                                </>
                            )
                        })}
                    </Row>
                </Container>
            </>
        )
    }
}

export default FilmFranchise;
