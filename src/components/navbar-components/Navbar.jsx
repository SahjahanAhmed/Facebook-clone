import React, { useContext, useState } from "react";

import {
  Container,
  Left,
  Logo,
  Right,
} from "../../styles/navbar-components/navbar.styled";

import { BsSearch, BsMessenger } from "react-icons/bs";
import { FaArrowLeft, FaUserFriends } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { BiSolidBell } from "react-icons/bi";

import { Link, NavLink } from "react-router-dom";

import logo from "/logo.png";
import user from "/SJ.jpg";
import SearchResultBox from "./SearchResultBox";
import NavbarMiddleIconsComp from "./NavbarMiddleIcons";
import { AiOutlineMenu } from "react-icons/ai";
import { toggleContext } from "../../context/ToggleContext";
const Navbar = () => {
  const [showSearchResultBox, setShowSearchResultBox] = useState("");

  const { state, dispatch } = useContext(toggleContext);

  return (
    <Container>
      <Left>
        <Logo
          src={logo}
          alt="Facebook"
          showsearchresultbox={showSearchResultBox}
        />
        <div className="search-box">
          <input
            type="search"
            placeholder="Search Facebook"
            id="search"
            onFocus={() => setShowSearchResultBox("true")}
            onBlur={() => setShowSearchResultBox("")}
          />
          <button
            className="menu-btn"
            onClick={() =>
              state === true
                ? dispatch({ type: "HIDE" })
                : dispatch({ type: "SHOW" })
            }
          >
            <AiOutlineMenu />
          </button>
          <label
            htmlFor="search"
            style={{ left: showSearchResultBox && "-1.3rem" }}
          >
            {showSearchResultBox ? <FaArrowLeft /> : <BsSearch />}
          </label>
          {showSearchResultBox && <SearchResultBox />}
        </div>
      </Left>
      <NavbarMiddleIconsComp />
      <Right>
        <div className="nav-right-first-div">
          <button tooltip={"Menu"}>
            <NavLink to={"/menu"}>
              <TbGridDots />
            </NavLink>
          </button>
          <button tooltip={"Messanger"}>
            <NavLink to={"/messanger"}>
              <BsMessenger />
            </NavLink>
          </button>
          <button tooltip={"Notifications"}>
            <NavLink to={"/notifications"}>
              <BiSolidBell />
            </NavLink>
          </button>
        </div>
        <Link className="nav-right-profile-btn" tooltip={`Account`}>
          <img src={user} alt="Account" />
        </Link>
      </Right>
    </Container>
  );
};

export default Navbar;
