import { useState} from "react";
import { products } from "../../utils/prodacts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../utils/context";
import { updateArrayData } from "../../utils/firebase-functions";

function ProductCard({product}){
    const {id,name,price,wasPrice,imageURL,description}= product;
const navigate = useNavigate();
  const { user } = useContext(MainContext);

  const redirectToLogin = () => {
    navigate("/authenticate");
  };

  const addToCart = async () => {
    await updateArrayData(product);
  };
    return(
        <div className="product-card">
            <div className="product-card__content">
                <div className="product-card__content__img">
                    <img  src={imageURL} alt={name}></img>
                </div>
                <div className="product-card__content__title">{name}</div>
                <div className="product-card__content__price">{price}
                    <span className="product-card__content__price__slash">{wasPrice}</span>
                </div>
                <div className="product-card__content__discrabtion">{description}</div>
            </div>
            <button onClick={user ? addToCart: redirectToLogin } className="product-card__btn">add to cart</button>
        </div>
    )

}
export default ProductCard;