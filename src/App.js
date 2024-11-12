import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage"; // Import the new page
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/recipe-details/:id" element={<RecipeDetailsPage />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
