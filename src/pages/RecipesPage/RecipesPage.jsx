import React, { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import axios from "axios";
import PageCard from "../../components/PageCard/PageCard";
import RecipePageHeader from "../../components/RecipePageHeader/RecipePageHeader";

const RecipesPage = () => {
  const [recipesArr, setRecipesArr] = useState([]);

  const getAllRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/recipes");
      setRecipesArr(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    getAllRecipes();
  }, []);
  return (
    <>
      <PageCard>
        <RecipePageHeader
          formFieldText="Search Recipe Category..."
          buttonText="+ Add New recipe"
          link="/recipes/add"
        />
        <RecipeCard recipesArr={recipesArr} />
      </PageCard>
    </>
  );
};

export default RecipesPage;
