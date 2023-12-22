import React from "react";
import FilmFranchise from "./FilmFranchise";

class AllFilms extends React.Component {
    
    render() {
        return (
            <>
                <FilmFranchise franchise="Harry Potter" />
                <FilmFranchise franchise="Avengers" />
                <FilmFranchise franchise="Star Wars" />
            </>
        )
    }
}

export default AllFilms;