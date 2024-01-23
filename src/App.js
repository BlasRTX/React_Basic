import React from "react";
import { useEffect } from "react";

//Key:7769c8ce
const API_URL = 'https://www.omdbapi.com?apikey=7769c8ce';

const App = () => {
    /**
     * Define a search movie, response and answer by data.
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

    return (
        <h1>App here</h1>
    );
}

export default App;