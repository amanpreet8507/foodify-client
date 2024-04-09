import "./SearchField.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemButton from "../../ItemButton/ItemButton";

const SearchField = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://foodify-aman-f9330e900213.herokuapp.com/recipes`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [query, setQuery] = useState("");
  const name_search = Object.keys(Object.assign({}, ...data));

  const search = (data) => {
    return data.filter((data) =>
      name_search.some((name) =>
        data[name].toString().toLowerCase().includes(query)
      )
    );
  };

  return (
    <>
      <div className="form">
        <input
          className="form__input"
          placeholder="Search recipe..."
          type="search"
          name="search-form"
          id="search-form"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      <center>
        {search(data).map((recipe) => {
          return (
            <>
              <div className="grid__container">
                <div className="card" key={recipe.id}>
                  <div className="card__info-div">
                    <div className="card__recipe-details">
                      <div className="card__inner-div">
                        <h4 className="card__title">Recipe</h4>
                        <Link
                          className="card__link"
                          to={`/recipes/${recipe.id}`}
                        >
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
                        src={`http://localhost:8080/${recipe.image_url}`}
                        placeholder="recipe image"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </center>
    </>
  );
};

export default SearchField;
