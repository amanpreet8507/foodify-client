import React, { useState } from "react";
import './MultiSelect.scss'
const MultiSelect = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  const handleAddToSelected = () => {
    setSelectedIngredients((prevIngredients) => [...prevIngredients, ...selectedOptions]);
    setSelectedOptions([]); // Clear the selected options after adding them to the list
  };

  return (
    <div>
      <label htmlFor="ingredients">Select Ingredients:</label><br />
      <select id="ingredients" multiple onChange={handleChange} value={selectedOptions}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <br />
      <button className= "select_button" onClick={handleAddToSelected}>
        Add Ingredient
      </button>

      {selectedIngredients.length > 0 && (
        <div>
          <h2>Selected Ingredients:</h2>
          <ul>
            {selectedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
