import ProductCard from "../components/prodact-card/prodact-card";
 import { products } from "../utils/prodacts";
 import { useContext } from "react";
 import { MainContext } from "../utils/context";

function Store() {
  const { user, loading, cartproduct } = useContext(MainContext);

  if (loading) return <div>Loading...</div>;

  const visibleProducts = products.filter(
    (product) =>
      !cartproduct?.some((item) => String(item.id) === String(product.id))
  );

  return (
    <div className="store">
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Store;
