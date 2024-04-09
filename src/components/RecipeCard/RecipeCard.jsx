import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RecipeCard.scss";
import ItemButton from "../ItemButton/ItemButton";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import DeleteRecipeModal from "../DeleteRecipeModal/DeleteRecipeModal";
import axios from "axios";
const RecipeCard = ({ recipesArr, handleAddToFavorites}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const navigate = useNavigate();

  const handleDeleteModalClose = () => {
    currentRecipe && setCurrentRecipe(null);
    setDeleteModal(false);
  };
  const handleDeleteModalOpen = (recipe) => {
    setCurrentRecipe(recipe);
    setDeleteModal(true);
  };

  // const handleAddToFavorites = async (recipe) => {
  //   try {
  //     const res = await axios.post("http://localhost:8080/favouriteRecipes", {
  //       name: recipe.name,
  //       image_url: recipe.image_url,
  //       category: recipe.category,
  //     });
  //     if (res.status === 201) {
  //       navigate("/");
  //       alert("Recipe added to favourites");
  //     }
  //   } catch (error) {
  //     console.log("handleAddToFavorites error:", error.message);
  //   }
  // };

  return (
    <div className="grid__container">
      {recipesArr.map((recipe) => (
        <div className="card" key={recipe.id}>
          <div className="card__info-div">
            <div className="card__recipe-details">
              <div className="card__inner-div">
                <h4 className="card__title">Recipe</h4>
                <Link className="card__link" to={`/recipes/${recipe.id}`}>
                  <ItemButton text={recipe.name} />
                </Link>
              </div>
              <div className="card__inner-div">
                <h4 className="card__title">Categoty</h4>
                <p className="card__inner-details">{recipe.category}</p>
              </div>
            </div>
          </div>
          <div className="card__image-container">
            <Link to={`/recipes/${recipe.id}`}>
              <img
                className="card__image"
                src={`https://foodify-aman-f9330e900213.herokuapp.com/${recipe.image_url}`}
                placeholder="recipe image"
              />
            </Link>
          </div>
          <div className="card__icons">
            <img
              src={deleteIcon}
              className="table__data__delete__icon card__icon-img"
              onClick={() => handleDeleteModalOpen(recipe)}
            />
            <Link to={`/recipes/edit/${recipe.id}`}>
              <img className="card__icon-img" src={editIcon} />
            </Link>
            <button
              className="card__button"
              //onClick={() => handleAddToFavorites(recipe)}
            >
              Add to favourite
            </button>
          </div>
        </div>
      ))}
      {deleteModal && (
        <DeleteRecipeModal
          onClose={handleDeleteModalClose}
          recipe={currentRecipe}
        />
      )}
    </div>
  );
};

export default RecipeCard;
