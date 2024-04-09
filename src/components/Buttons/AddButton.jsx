import "./Buttons.scss";

const AddButton = (props) => {
  return (
    <button className="button button__add" onClick={props.action}>
      {props.children}
    </button>
  );
};

export default AddButton;
