import React, { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './glass.png'
import movieCard from './movieCard';

//Key:7769c8ce
const API_URL = 'https://www.omdbapi.com?apikey=7769c8ce';

/**
 * Get static data from API
 */
const movie_1 = {
    "Title": "Shrek 2",
    "Year": "2004",
    "imdbID": "tt0298148",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


const App = () => {

    const [movies, setMovies] = useState([]);


    /**
     * Define a API connection
     * Define search movie, response and answer by data.
     * @param {*} title 
     */
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        //Get dinamyc data
        setMovies(data.Search);
    }
    /**
     * Define a state after search movie
     */
    useEffect(() => {
        searchMovie('Shrek');
    }, []);
    /**
    * Define a JSX(similar to structure HTML) search movie
    */
    return (
        <div className="app">
            <h1>Cinecalidad</h1>

            <div className="search">
                <input placeholder="Search to movie"
                    value={searchMovie}
                    onChange={() => { }}
                />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => { }}
                />
            </div>
            {
                /**If movie 
                   */
                movies?.length > 0
                    ? (
                        <div className="container">
                            <movieCard movie_1={movies} />
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies?</h2>
                        </div>
                    )
            }



        </div>
    );
}

export default App;