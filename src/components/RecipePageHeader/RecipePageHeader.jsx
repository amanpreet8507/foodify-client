import AddButton from "../Buttons/AddButton";
import { Link } from "react-router-dom";
import "./RecipePageHeader.scss";

const RecipePageHeader = (props) => {
  return (
    <>
      <div className="page-header">
        <div className="page-header__search-button">
          <Link className="page-header__link" to="recipes/search">
            <AddButton>Search Recipe</AddButton>
          </Link>
          <Link className="page-header__link" to={props.link}>
            <AddButton>+ Add New Reicpe</AddButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecipePageHeader;
