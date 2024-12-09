import React, { useContext, useState } from "react";
import { IoIosArrowDown, IoMdCart } from "react-icons/io";
import { FaSearch, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import SearchSection from "../search/SearchSection";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";

export default function Navbar() {
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div>
        <IoMenuSharp className="menu" onClick={toggleMenu} />
        {isMenu && (
          <div className="fullscreen-menu">
            <IoCloseSharp className="close-icon" onClick={toggleMenu} />
            <ul className="menu-items">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/"} onClick={toggleDropdown}>
                  Shop{" "}
                  <IoIosArrowDown
                    className={`item_arrow ${isOpen ? "rotate" : ""}`}
                  />
                </NavLink>
                {isOpen && (
                  <ul className="dropdown_menu">
                    <li>
                      <NavLink to="/ProductDetailsPage">Products</NavLink>
                    </li>
                    <li>
                      <NavLink to="/ss">Category 4</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aa">Category 3</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink to={"/category"}>Category</NavLink>
              </li>
              <li>
                <NavLink to={"/y"}>Brands</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
      <h2>T.Shop</h2>
      <ul className="nav_links">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/"} onClick={toggleDropdown}>
            Shop{" "}
            <IoIosArrowDown
              className={`item_arrow ${isOpen ? "rotate" : ""}`}
            />
          </NavLink>
          {isOpen && (
            <ul className="dropdown_menu">
              <li>
                <NavLink to="/ProductDetailsPage">Products</NavLink>
              </li>
              <li>
                <NavLink to="/Cart">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/aa">Category 3</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to={"/category"}>Category</NavLink>
        </li>
        <li>
          <NavLink to={"/y"}>Brands</NavLink>
        </li>
      </ul>
      <SearchSection />
      <div className="icons">
        <FaSearch className="icon" />
        <IoMdCart onClick={goToCart} />
        <span className="user">{cartCount}</span>
        <FaUser />
      </div>
    </div>
  );
}
