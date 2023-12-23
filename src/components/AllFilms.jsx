import React from "react";
import FilmFranchise from "./FilmFranchise";
import ModalWindow from "./ModalWindow";

class AllFilms extends React.Component {

    render() {
        return (
            <>
                <ModalWindow />
                <div className="searchFilms"></div>
                <div className="allFilms">
                    <FilmFranchise franchise="Harry Potter" />
                    <FilmFranchise franchise="Avengers" />
                    <FilmFranchise franchise="Star Wars" />
                </div>
            </>
        )
    }
}

export default AllFilms;