import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import RecipeCard from "../components/RecipeCard";
import "../styles/RecipesPage.css";

function RecipesPage() {
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  const fetchRandomRecipes = async () => {
    const apiKey = "8947aeb90a7448dcabd53a297bdb21b0";
    const url = `https://api.spoonacular.com/recipes/random?number=20&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSuggestions(data.recipes);
    } catch (error) {
      console.error("Error fetching random recipes:", error);
    }
  };

  const handleAddIngredient = () => {
    if (ingredientInput.trim() && !ingredients.includes(ingredientInput)) {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput("");
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  const handleSearchRecipes = () => {
    if (ingredients.length === 0) {
      alert("Please add some ingredients before searching.");
      return;
    }

    // Navigate to search results page with ingredients as state
    navigate("/search-results", { state: { ingredients } });
  };

  return (
    <div className="recipes-page">
      <h2>Search Recipes</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Add an ingredient"
          value={ingredientInput}
          onChange={(e) => setIngredientInput(e.target.value)}
        />
        <button onClick={handleAddIngredient}>Add</button>
      </div>
      <div className="ingredient-tags">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-tag">
            {ingredient}
            <button onClick={() => handleRemoveIngredient(ingredient)}>×</button>
          </div>
        ))}
      </div>
      <button className="search-recipes-button" onClick={handleSearchRecipes}>
        Search Recipes
      </button>
      <h3>Suggestions</h3>
      <div className="recipe-grid">
        {suggestions.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipesPage;
