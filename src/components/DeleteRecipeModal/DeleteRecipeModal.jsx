import React from 'react'
import './DeleteRecipeModal.scss'
import closeImage from "../../assets/icons/close-24px.svg";
import axios from 'axios'

const DeleteRecipeModal = ({ onClose, recipe }) => {
    const handleDelete = async () => {
        try {
          const res = await axios.delete(`http://localhost:8080/recipes/${recipe.id}`);
          if (res.status === 204) {
            onClose();
            window.location.reload();
          }
        } catch (error) {
          console.error(error);
        }
      };
      return (
        <div className="deleteModal__container">
          <div className="deleteModal__content">
            <div>
              <div className="deleteModal__close" onClick={onClose}>
                <img src={closeImage} alt="delete" />
              </div>
              <h1>Delete {recipe.name} recipe ?</h1>
              <p>
                Please confirm that you'd like to delete the{" "}
                {recipe.name} from the list of recipes. You won't be
                able to undo this action.
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
  )
}

export default DeleteRecipeModal
