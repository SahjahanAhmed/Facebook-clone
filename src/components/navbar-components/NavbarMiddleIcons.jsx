import React, { useRef } from "react";
import { Middle } from "../../styles/navbar-components/navbar-middle-icons.styled";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { PiVideo } from "react-icons/pi";
import { LuStore } from "react-icons/lu";
import { CgGames } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const NavbarMiddleIconsComp = ({ shown }) => {
  return (
    <Middle
      style={{
        display: window.innerWidth <= 700 && shown && "flex",
      }}
    >
      <NavLink to={`/`} tooltip={"Home"}>
        <AiFillHome />
      </NavLink>
      <NavLink to={`/friends`} tooltip={"Friends"}>
        <FaUserFriends />
      </NavLink>
      <NavLink to={`/video`} tooltip={"Videos"}>
        <PiVideo />
      </NavLink>
      <NavLink to={`/marketplace`} tooltip={"Marketplace"}>
        <LuStore />
      </NavLink>
      <NavLink to={`/gaming`} tooltip={"Gaming"}>
        <CgGames />
      </NavLink>
    </Middle>
  );
};

export default NavbarMiddleIconsComp;
