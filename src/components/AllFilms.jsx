import React from "react";
import FilmFranchise from "./FilmFranchise";
import ModalWindow from "./ModalWindow";

class AllFilms extends React.Component {

    render() {
        return (
            <>
                <ModalWindow />
                <FilmFranchise franchise="Harry Potter" />
                <FilmFranchise franchise="Avengers" />
                <FilmFranchise franchise="Star Wars" />
            </>
        )
    }
}

export default AllFilms;