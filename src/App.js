import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Products from "./Components/Products";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/Index";

// import Slider
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/productDetails/:idProduct" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
