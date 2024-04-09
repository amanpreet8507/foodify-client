import React, { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import axios from "axios";
import PageCard from "../../components/PageCard/PageCard";
import RecipePageHeader from "../../components/RecipePageHeader/RecipePageHeader";
import { useNavigate } from "react-router-dom";

const RecipesPage = () => {
  const [recipesArr, setRecipesArr] = useState([]);
  const [clickSubmit, setClickSubmit] = useState(false);
  const navigate = useNavigate();

  const getAllRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/recipes");
      setRecipesArr(response.data);
      console.log("recipesArr", response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAddToFavorites = async (recipe) => {
    setClickSubmit(true);

    try {
      const res = await axios.post("http://localhost:8080/favouriteRecipes", {
        name: recipe.name,
        image_url: recipe.image_url,
        category: recipe.category,
      });
      if (res.status === 201) {
        navigate("/");
        alert("Recipe added to favourites");
      }
    } catch (error) {
      console.log("handleAddToFavorites error:", error.message);
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
          link="/recipes/add"
        />
        <div className="recipe-cards-container">
          <RecipeCard
            recipesArr={recipesArr}
            handleAddToFavorites={handleAddToFavorites}
          />
        </div>
      </PageCard>
    </>
  );
};

export default RecipesPage;
