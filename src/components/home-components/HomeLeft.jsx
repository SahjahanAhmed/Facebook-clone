import React, { useContext, useEffect, useState } from "react";
import { HomeLeft } from "../../styles/home-components/homeleft.styled";
import { FaNotesMedical, FaUserFriends } from "react-icons/fa";
import { BsFillBookmarkFill, BsStopwatch } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { LuStore } from "react-icons/lu";
import { PiVideo } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";

import user from "/SJ.jpg";
import NavbarMiddleIconsComp from "../navbar-components/NavbarMiddleIcons";
import { toggleContext } from "../../context/ToggleContext";
const HomeLeftComp = () => {
  const { state } = useContext(toggleContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
    };
  }, [windowWidth, window.innerWidth, state]);

  return (
    <HomeLeft
      style={{
        display: windowWidth <= 700 && state && "block",
      }}
    >
      {windowWidth <= 700 && state && <NavbarMiddleIconsComp shown={state} />}

      <ul>
        <li>
          <img src={user} alt="" />
          <p>Sahjahan Ahmed</p>
        </li>
        <li>
          <button>
            <FaUserFriends />
          </button>
          <p>Find Friends</p>
        </li>
        <li>
          <button>
            <FaNotesMedical />
          </button>
          <p>Feed</p>
        </li>
        <li>
          <button className="saved-btn">
            <BsFillBookmarkFill />
          </button>
          <p>Saved</p>
        </li>
        <li>
          <button>
            <HiUserGroup />
          </button>
          <p>Groups</p>
        </li>
        <li>
          <button>
            <LuStore />
          </button>
          <p>Marketplace</p>
        </li>
        <li>
          <button>
            <PiVideo />
          </button>
          <p>Video</p>
        </li>
        <li>
          <button>
            <BsStopwatch />
          </button>
          <p>Memories</p>
        </li>
        <li>
          <button className="see-more-btn">
            <GoChevronDown />
          </button>{" "}
          <p>See more</p>
        </li>
      </ul>
    </HomeLeft>
  );
};

export default HomeLeftComp;
