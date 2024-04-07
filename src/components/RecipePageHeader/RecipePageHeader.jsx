import AddButton from "../Buttons/AddButton";
import SearchField from "../FormElements/SearchField/SearchField"
import {Link} from "react-router-dom";
const RecipePageHeader = (props) => {
  return (
    <>
      <div className="page-header">
        <h1 className="page-header__h1">{props.pageAbout}</h1>
        <div className="page-header__search-button">
          <SearchField text={props.formFieldText} />
          <Link to ={props.link} className="page-header__link">
            <AddButton>{props.buttonText}</AddButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecipePageHeader;