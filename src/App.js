import "./App.css";
import react, { useState } from "react";
import Movielist from "./Components/Movielist/Movielist";
import AddMovie from "./Components/AddMovie/AddMovie";

import MyNavbar from "./Components/MyNavbar/MyNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Swich } from "react-router-dom";
import { movies } from "./Components/TrailerMovie/TrailerMovieList";
import TrailerMovie from "./Components/TrailerMovie/TrailerMovie";

function App() {
    const [films, setfilms] = useState(movies);

    const [searchTitle, setSearchTitle] = useState("");

    const [searchRate, setSearchRate] = useState(0);

    const getSearchRate = (input) => {
        setSearchRate(input);
    };

    const getSearchTitle = (input) => {
        setSearchTitle(input);
    };
    const getNewMovie = (newMovie) => {
        setfilms([...films, newMovie]);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <MyNavbar
                    getSearchRate={getSearchRate}
                    getSearchTitle={getSearchTitle}
                />

                <Route exact path="/">
                    <Movielist
                        films={films}
                        searchTitle={searchTitle}
                        searchRate={searchRate}
                    />
                </Route>

                <Route path="/TrailerMovie/:movieId" component={TrailerMovie} />
                <AddMovie getNewMovie={getNewMovie} />
            </div>
        </BrowserRouter>
    );
}

export default App;
