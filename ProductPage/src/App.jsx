import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
