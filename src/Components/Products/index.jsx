import { useState, useEffect } from "react";
import "./index.css";
import Product from "../Product";
function Products() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []); // dependencies liste
  return (
    <>
      <div className=" container">
        <h1 className="products-title">our products</h1>
        <div className="product-cards">
          {products.map((product) => {
            if (product.title !== "" && product.description !== "")
              return (
                <Product
                  key={product.id}
                  prod={product}
                  // prod={product}
                />
              );
          })}
        </div>
      </div>
    </>
  );
}
export default Products;
