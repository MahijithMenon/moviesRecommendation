import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  SciFi: [
    { name: "Rick and Morty", rating: "4/5" },
    { name: "Loki", rating: "3.5/5" },
    { name: "Avengers", rating: "3.5/5" }
  ],

  Action: [
    {
      name: "MoonKnight",
      rating: "5/5"
    },
    {
      name: "Captian America : Civil War",
      rating: "4.5/5"
    },
    {
      name: "Incredible HULK",
      rating: "4/5"
    }
  ],
  Comedy: [
    {
      name: "She-Hulk",
      rating: "3.5/5"
    },
    {
      name: "Mr.Bean",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("SciFi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Movies Recommendation </h1>
      <p style={{ fontSize: "smaller" }}>
        Here are some of my favorite shows and movies . Select Genre to select
        the category
      </p>

      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
