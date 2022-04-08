import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import { stateContext } from "../context/StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  const {
    state: { basket, user },
  } = useContext(stateContext);
  // console.log("header", user);
  const history = useNavigate();

  const handleSignIn = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          history("/");
          console.log("user Logged Out");
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  return (
    <>
      <nav className="header">
        {/* logo  */}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="img"
          />
        </Link>
        {/* search bar  */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        {/* 3 link  */}

        <div className="header__nav">
          {/* 1st link */}
          <Link
            onClick={handleSignIn}
            to={!user && "/login"}
            className="header__link"
          >
            <div className="header__option">
              <span className="header__optionLineOne">
                Hello {user ? user.email : "guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          {/* 2nd link */}
          <Link to="" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/* 3rd link */}
          <Link to="/checkout" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          {/* basket 4th link */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket ? basket.length : 0}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
