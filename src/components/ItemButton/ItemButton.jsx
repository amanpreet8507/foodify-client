import './ItemButton.scss'
import chevron from '../../assets/icons/chevron_right-24px.svg'

const ItemButton = (props) => {
  return (
    <button className='item-button'>
        {props.text}
        <img src={chevron}></img>
    </button>
  )
}

export default ItemButton