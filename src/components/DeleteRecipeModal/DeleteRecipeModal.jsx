import React, { useEffect, useState } from "react";
import "./DeleteRecipeModal.scss";
import closeImage from "../../assets/icons/close-24px.svg";
import axios from "axios";

const DeleteRecipeModal = ({ onClose, recipe }) => {
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const getRecipeById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/recipes/${recipe.id}`
      );
      setSelectedRecipe(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRecipeById();
  }, []);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/recipes/${recipe.id}`
      );
      if (response.status === 204) {
        onClose();
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="deleteModal">
    <div className="deleteModal__container">
      <div className="deleteModal__content">
        <div>
          <div className="deleteModal__close" onClick={onClose}>
            <img src={closeImage} alt="delete" />
          </div>
          <h1>Delete {selectedRecipe.name} recipe ?</h1>
          <p>
            Please confirm that you'd like to delete the {selectedRecipe.name} from the
            list of recipes. You won't be able to undo this action.
          </p>
        </div>
        <div className="deleteModal__buttons">
          <button className="deleteModal__button_cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="deleteModal__button_delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DeleteRecipeModal;
