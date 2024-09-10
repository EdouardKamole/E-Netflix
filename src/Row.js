import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results || []); // Ensure movies is always an array
      } catch (error) {
        console.error("Error fetching data:", error);
        setMovies([]); // Set to empty array on error
      }
    }
    fetchData();
  }, [fetchUrl]);

  // Render nothing if movies is undefined or empty
  if (!Array.isArray(movies) || movies.length === 0) {
    return null;
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          // Determine which image path to use based on isLargeRow
          const imagePath = isLargeRow
            ? movie.poster_path
            : movie.backdrop_path;

          // Only render if imagePath exists
          if (imagePath) {
            return (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${imagePath}`}
                alt={movie.name || "Movie Poster"}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Row;
