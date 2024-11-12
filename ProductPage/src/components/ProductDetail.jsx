/* const ProductDetail = () => {
     return (
      <div>
         <h1>Header</h1>
      </div>
    );
  };
  
  export default ProductDetail; */
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productDetail = products.find((p) => p.id === parseInt(id));
    if (productDetail) {
      setProduct(productDetail);
    }
  }, [id, products]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>Rating: {product.rating.rate} ★</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => navigate("/")}>Back to Product List</button>
    </div>
  );
};

export default ProductDetail;
