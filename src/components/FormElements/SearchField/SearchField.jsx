import "./SearchField.scss";

const SearchField = (props) => {
  return (
    <form className="form">
      <input className="form__input" placeholder={props.text}></input>     
    </form>
  );
};

export default SearchField;