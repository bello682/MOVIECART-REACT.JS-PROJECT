// import React, { useState } from "react"; // OR
import { useState, useEffect } from "react";
import movieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// APIKEY =  f6778f80
const API_URL = "http://www.omdbapi.com?apikey=f6778f80";

const movie1 = {
	Title: "Amazing Spiderman Syndrome",
	Year: "2012",
	imdbID: "tt2586634",
	Type: "movie",
	Poster: "N/A",
};

console.log(movie1);
console.log(movieCard);

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies("superman");
	}, []);
	return (
		<div className="app">
			<h1>MovieLand</h1>

			<div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img className="search_barIcon" src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
			</div>

			{movies?.length > 0 ? (
				<div className="container">
					{movies.map((movie) => (
						<MovieCard movie={movie} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No movies found</h2>
				</div>
			)}
		</div>
	);
};
export default App;
