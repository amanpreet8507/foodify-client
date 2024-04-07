import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import Header from "./components/Header/Header";
import EditRecipePage from "./pages/EditRecipePage/EditRecipePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage/RecipeDetailsPage";
import AddRecipesPage from "./pages/AddRecipesPage/AddRecipesPage";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app__container">
          <Routes>
            <Route path="/" element={<RecipesPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
            <Route path="/recipes/add" element={<AddRecipesPage />} />
            <Route path="/recipes/edit/:id" element={<EditRecipePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
