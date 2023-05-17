import "./index.css";
import bagsImg from "../../assets/bags.png";
function Slider() {
  return (
    <>
      <div className="slider container">
        <div className="slider-content">
          <h1 className="slider-title">By Now !</h1>
          <p className="slider-desc">
            find best products with cheaper prices in our e-commerce web site
            ...
          </p>
          <a href="" className="slider-button">
            See more
          </a>
        </div>
        <div className="img">
          <img src={bagsImg} alt="" />
        </div>
      </div>
    </>
  );
}
export default Slider;
