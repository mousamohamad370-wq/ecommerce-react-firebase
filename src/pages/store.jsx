import ProductCard from "../components/prodact-card/prodact-card";
 import { products } from "../utils/prodacts";

function Store(){
    return(
        <div className="store">
            {products.map( (product)=>{
                return  <ProductCard product={product}/>;
                   
                
            })}

        </div>
    );
}
export default Store;