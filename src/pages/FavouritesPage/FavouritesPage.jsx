import React, { useEffect, useState } from "react";
import PageCard from "../../components/PageCard/PageCard";
import FavouriteRecipeCard from "../../components/FavouriteRecipesCard/FavouriteRecipesCard";
import axios from "axios";
import "./FavouritesPage.scss";

const FavouritesPage = () => {
  const [favRecipes, setFavRecipes] = useState([]);

  const getAllFavRecipes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/favouriteRecipes"
      );
      setFavRecipes(response.data);
      console.log("favRecipes", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllFavRecipes();
  }, []);

  return (
    <PageCard>
      <FavouriteRecipeCard favRecipes={favRecipes} />
    </PageCard>
  );
};

export default FavouritesPage;
