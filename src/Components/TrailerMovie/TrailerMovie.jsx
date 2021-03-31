import React from "react";
import { movies } from "../TrailerMovie/TrailerMovieList";
function TrailerMovie(props) {
    const movieId = props.match.params.movieId;
    const film = movies.find((film) => film.id === Number(movieId));
    console.log(film);
    return (
        <div>
            <p
                style={{
                    fontSize: "20px",
                    fontFamily: "cursive",
                    color: "white",
                    marginTop: "20px",
                }}
            >
                <h3>Movie description:</h3> {film.description}
            </p>
            <h3
                style={{
                    fontFamily: "cursive",
                    color: "#ECF0F1",
                    marginTop: "20px",
                }}
            >
                Trailer:
            </h3>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
                {film.trailer}
            </div>
        </div>
    );
}

export default TrailerMovie;
