import React from "react";
import FilmFranchise from "./FilmFranchise";
import ModalWindow from "./ModalWindow";

class AllFilms extends React.Component {

    render() {
        return (
            <>
                <ModalWindow />
                <div className="searchFilms">
                    <FilmFranchise franchise={this.props.searchText} />
                </div>
                <div className="allFilms">
                    <FilmFranchise franchise="Star trek" />
                    <FilmFranchise franchise="Avengers" />
                    <FilmFranchise franchise="Star Wars" />
                </div>
            </>
        )
    }
}

export default AllFilms;