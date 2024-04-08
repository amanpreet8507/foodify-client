import React, { useEffect, useState } from "react";
import PageCard from "../../components/PageCard/PageCard";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import axios from "axios";
const FavouritesPage = () => {
  const [favRecipes, setFavRecipes] = useState([]);

  const getAllFavRecipes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/favouriteRecipes"
      );
      setFavRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllFavRecipes();
  }, []);

  return (
    <PageCard>
      <RecipeCard recipesArr={favRecipes}/>
    </PageCard>
  );
};

export default FavouritesPage;
