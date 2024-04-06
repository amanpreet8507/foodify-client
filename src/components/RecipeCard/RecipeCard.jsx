import React, { useState } from "react";
import { Link } from "react-router-dom";
import './RecipeCard.scss'
import ItemButton from "../ItemButton/ItemButton";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import DeleteRecipeModal from "../DeleteRecipeModal/DeleteRecipeModal";

const RecipeCard = ({ recipesArr }) => {
    const [deleteModal, setDeleteModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const handleDeleteModalClose = () => {
    currentRecipe && setCurrentRecipe(null);
    setDeleteModal(false);
  };
  const handleDeleteModalOpen = (recipe) => {
    setCurrentRecipe(recipe);
    setDeleteModal(true);
  };
  return (
    <div>
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
              <img className="card__image" src={`http://localhost:8080/${recipe.image_url}`} placeholder="recipe image"/>
            </div>
          <div className="card__icons">
              <img
                src={deleteIcon}
                className="table__data__delete__icon"
                onClick={() => handleDeleteModalOpen(recipe)}
              />

            <Link to={`/recipes/edit/${recipe.id}`}>
              <img src={editIcon} />
            </Link>
          </div>
        </div>
      ))}
     {deleteModal && (
        <DeleteRecipeModal
          onClose={handleDeleteModalClose}
          recipe={currentRecipe}
        />
      )}    </div>
  );
};


export default RecipeCard;
