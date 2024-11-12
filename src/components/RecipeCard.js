import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RecipeCard.css";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/recipe-details/${recipe.id}`);
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button className="search-button" onClick={handleViewDetails}>
        Search
      </button>
    </div>
  );
}

export default RecipeCard;
