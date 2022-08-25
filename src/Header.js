import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import {auth} from './firebase'
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

// const tre=user.email;

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* <SearchIcon className="header_searchicon" /> */}
        <img
          className="header_searchicon"
          src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
        />
      </div>
      <div className="header_nav">
        <Link to={!user&&"/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email.substring(0,5)}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& order</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionbasket">
            <img
              className="header_optionbasketimg"
              src="https://i.pinimg.com/originals/4b/a7/d8/4ba7d8d3c62e961494a50de2f61b2cc8.jpg"
            />
            <span
              className="header_optionLineTwo
          header_basketCount"
            >
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
