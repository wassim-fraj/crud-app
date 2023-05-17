import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./index.css";

function ProductDetails() {
  const [productDetails, setProductDetails] = useState([]);
  const params = useParams();
  const api = "https://fakestoreapi.com/products";
  console.log(params.idProduct);
  useEffect(() => {
    fetch(`${api}/${params.idProduct}`)
      .then((data) => data.json())
      .then((data) => setProductDetails(data));
  }, []);
  function deleteProd() {
    fetch(`${api}/${productDetails.id}`, {
      method: "DELETE",
    }).then((data) => console.log("deleted"));
  }
  return (
    <div className="product-details-container container">
      <div className=" product-detail ">
        <div className="product-details">
          <img
            className="product-details-image"
            src={productDetails.image}
            alt={productDetails.title}
          />
          <ul className="product-list-details">
            <li>
              <h1>
                <span>Title :</span>
                {productDetails.title}
              </h1>
            </li>
            <li>
              <p>
                <span>Description :</span>
                {productDetails.description}
              </p>
            </li>
            <li>
              <span>Price :</span>
              {productDetails.price}
            </li>
          </ul>
        </div>
        <div className="action-details">
          <Link onClick={() => deleteProd()} className="delete-button">
            Delete
          </Link>
          <a className="update-button"> Update</a>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
