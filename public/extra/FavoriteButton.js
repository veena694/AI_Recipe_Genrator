import React from "react";

function Favorites({ favorites, setFavorites, setSelectedRecipe }) {
  return (
    <div>
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <button onClick={() => setSelectedRecipe(recipe.id)}>View Details</button>
            <button
              onClick={() =>
                setFavorites(favorites.filter((fav) => fav.id !== recipe.id))
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
