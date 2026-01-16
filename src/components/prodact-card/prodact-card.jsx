import { useState } from "react";
import { products } from "../../utils/prodacts";

function ProductCard({product}){
    const {id,name,price,wasPrice,imageURL,description}= product;

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
            <button className="product-card__btn">add to cart</button>
        </div>
    )

}
export default ProductCard;