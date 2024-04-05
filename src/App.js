import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<RecipesPage />} />
        <Route path="/favourites" element={<FavouritesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
