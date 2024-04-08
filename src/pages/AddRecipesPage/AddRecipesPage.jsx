import React, { useState } from "react";
import PageCard from "../../components/PageCard/PageCard";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import TextField from "../../components/FormElements/TextField/TextField";
import ImageUploader from "../../components/FormElements/ImageUploader/ImageUploader";
import AddButton from "../../components/Buttons/AddButton";
import CancelButton from "../../components/Buttons/CancelButton";
import "./AddRecipesPage.scss";
import MultiSelect from "../../components/FormElements/MultiSelect/MultiSelect";

const AddRecipesPage = () => {
  const ingredients = [
    "Flour",
    "Sugar",
    "Salt",
    "Butter",
    "Eggs",
    "Milk",
    "Vanilla Extract",
    "Baking Powder",
    "Baking Soda",
    "Chocolate Chips",
    "Olive Oil",
    "Garlic",
    "Onion",
    "Tomatoes",
    "Basil",
    "Parmesan Cheese",
    "Ground Beef",
    "Chicken Breast",
    "Shrimp",
    "Rice",
    "Soy Sauce",
    "Ginger",
    "Lemon",
    "Cinnamon",
    "Nutmeg",
    "Parsley",
    "Oregano",
    "Thyme",
    "Lime",
    "Chili Powder",
  ];
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false);
  const [image_url, setImageUrl] = useState("");
  
  const handleSubmit = async () => {
    setClickSubmit(true);

    if (name === "" || category === "" || image_url === "") {
      console.log("Form is invalid");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/recipes", {
        name: name,
        image_url: `/images/${image_url}`,
        category: category,
      });
      if (res.status === 201) {
        clearForm();
        setClickSubmit(false);
        navigate("/");
        alert("New Recipe added!")
      }
    } catch (error) {
      console.log("handleSubmit error:", error.message);
    }
  };

  const clearForm = () => {
    setName("");
    setCategory("");
    setImageUrl("");
  };
  return (
    <div>
      <PageCard>
        <div className="addRecipe__header">
          <Link to="/">
            <img src={backArrow} alt="back_arrow" />
          </Link>
          <h1 className="addRecipe__header--title">Add New Recipe</h1>
        </div>

        <div className="addRecipe__container">
          <div className="addRecipe__column">
            <h2>Recipe Details</h2>
            <div className="addRecipe__textFields">
              <TextField
                label="Recipe Name"
                value={name}
                setValue={(e) => setName(e.target.value)}
                error={
                  clickSubmit && name === "" ? "Recipe name is required" : ""
                }
              />
              <TextField
                label="Category"
                value={category}
                setValue={(e) => setCategory(e.target.value)}
                error={
                  clickSubmit && category === "" ? "Category is required" : ""
                }
              />
              <ImageUploader label="Upload Image" value={image_url} setImageUrl={(e)=> setImageUrl(e.target.files)}/>
            </div>
          </div>
          <div className="addRecipe__divider"></div>
          <div className="addRecipe__column">
            <h2>Ingredients</h2>
            <div className="addRecipe__textFields">
              <MultiSelect options={ingredients} />
            </div>
          </div>
        </div>
        <div className="addRecipe__buttons">
          <CancelButton text="Cancel" link="/" />
          <AddButton action={handleSubmit}>+ Add Recipe</AddButton>
        </div>
      </PageCard>
    </div>
  );
};

export default AddRecipesPage;
