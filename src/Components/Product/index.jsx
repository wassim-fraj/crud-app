import { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Product({ prod }) {
  //const { image, title, price } = ;
  //console.log(proclgps);
  //const { prod } = props;
  //console.log(prod);
  //const prod = props;
  //console.log(prod);
  //  console.log(prod);
  return (
    <>
      <div className="product-card">
        <img src={prod.image} alt={prod.title} />
        <div className="card-titles">
          <h2 className="product-title">{prod.title}</h2>
          <p>{prod.price}$</p>
          <Link to={`./productDetails/${prod.id}`} className="details-button">
            details
          </Link>
        </div>
      </div>
    </>
  );
}
export default Product;
