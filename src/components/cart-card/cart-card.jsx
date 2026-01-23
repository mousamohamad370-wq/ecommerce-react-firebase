import { AiFillDelete } from "react-icons/ai";
import { removeArrayData } from "../../utils/firebase-functions";


function CartCard({product}){
    const {name,price,imageURL,description}=product;
    const handleDelete= async ()=>{
        await removeArrayData(product);

    }
 
    return(
        <div className="cart-card">
<img src={imageURL}alt={name} className="cart-card__image"></img>
<span className="cart-card__title">{name}</span>
<span className="cart-card__description">{description}</span>
<span className="cart-card__price">${price}</span>
<AiFillDelete className="cart-card__icon" onClick={handleDelete}></AiFillDelete>



        </div>
    )
}
export default CartCard;