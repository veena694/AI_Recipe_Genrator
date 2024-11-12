import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import "../styles/RecipesPage.css";

function SearchResultsPage() {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const ingredients = location.state?.ingredients || []; // Retrieve ingredients from navigation state

  useEffect(() => {
    if (ingredients.length > 0) {
      fetchRecipesByIngredients();
    }
  }, [ingredients]);

  const fetchRecipesByIngredients = async () => {
    const apiKey = "YOUR_SPOONACULAR_API_KEY";
    const query = ingredients.join(",");
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=10&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="recipes-page">
      <h2>Recipes for {ingredients.join(", ")}</h2>
      <div className="recipe-grid">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found. Try adding more ingredients.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;
