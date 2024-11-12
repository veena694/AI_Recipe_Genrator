// src/components/RecipeList.js
import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      <h2>Recipe Suggestions</h2>
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
