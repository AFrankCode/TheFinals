/* const ProductList = () => {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  };
  
  export default ProductList; */

import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>Rating: {product.rating.rate} ★</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
