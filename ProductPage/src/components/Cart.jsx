import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <p>
                  {product.title} - {product.price}
                </p>
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>
            Total: $
            {cart
              .reduce(
                (total, item) => total + parseFloat(item.price.slice(1)),
                0
              )
              .toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
