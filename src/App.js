import React from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './glass.png'

//Key:7769c8ce
const API_URL = 'https://www.omdbapi.com?apikey=7769c8ce';

const App = () => {
    /**
     * Define a API connection
     * Define search movie, response and answer by data.
     * @param {*} title 
     */
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data);
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
                    alt="search" />
            </div>




        </div>
    );
}

export default App;