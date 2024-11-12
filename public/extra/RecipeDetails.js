import React, { useState, useEffect } from "react";
import { getRecipeDetails } from "../utils/api";

function RecipeDetails({ recipeId, setSelectedRecipe }) {
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await getRecipeDetails(recipeId);
      setRecipeDetails(details);
    };
    fetchDetails();
  }, [recipeId]);

  if (!recipeDetails) return <p>Loading...</p>;

  return (
    <div className="recipe-details">
      <button onClick={() => setSelectedRecipe(null)}>Back to Recipes</button>
      <h2>{recipeDetails.title}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipeDetails.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipeDetails.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
