import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemButton from "../ItemButton/ItemButton";
import RemoveRecipeModal from "../RemoveRecipeModal/RemoveRecipeModal";

const FavouriteRecipeCard = ({ favRecipes }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const handleDeleteModalClose = () => {
    setCurrentRecipe(null);
    setDeleteModal(false);
  };

  const handleDeleteModalOpen = (recipe) => {
    setCurrentRecipe(recipe);
    setDeleteModal(true);
  };

  // Add function to remove recipe from favourites

  return (
    <div className="grid__container">
      {favRecipes.map((recipe) => (
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
            <button
              className="card__button"
              onClick={() => handleDeleteModalOpen(recipe)}
            >
              Remove from favourites
            </button>
          </div>
        </div>
      ))}
      {deleteModal && (
        <RemoveRecipeModal
          onClose={handleDeleteModalClose}
          recipe={currentRecipe}
        />
      )}
    </div>
  );
};

export default FavouriteRecipeCard;
