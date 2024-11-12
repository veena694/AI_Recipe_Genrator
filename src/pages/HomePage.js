
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const handleSearchRecipes = () => {
    navigate("/recipes");
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1>AI-Powered Recipe Generator</h1>
        <button className="search-button" onClick={handleSearchRecipes}>
          Search Recipes
        </button>
      </div>
      <div className="image-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhM8Ob3z56hDpDw07Xr3FMbrmS6lnJY2cFg&s" // Replace with the path to your image
          alt="Delicious food"
          className="food-image"
        />
      </div>
    </div>
  );
}

export default HomePage;

