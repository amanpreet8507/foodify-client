import React, { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import axios from 'axios'
const RecipesPage = () => {
  const [recipesArr, setRecipesArr] = useState([]);
  const getAllRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/recipes");
      setRecipesArr(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllRecipes();
  }, []);
  return(
    <>
        <RecipeCard recipesArr={recipesArr}/>
    </>
  ) ;
};

export default RecipesPage;
