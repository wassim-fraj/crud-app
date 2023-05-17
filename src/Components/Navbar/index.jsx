import "./index.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header>
        <div className="header container">
          <Link className="logo" to="./">
            e-commerce
          </Link>
          <nav className="nav">
            <ul>
              <li>
                <Link className="navbar-item" to={"./"}>
                  home
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to={"./about"}>
                  about
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to={"/categories/:id"}>
                  categories
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Navbar;
