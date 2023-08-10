import React from "react";
import { HomeRight } from "../../styles/home-components/homeright.styled";
import { TbVideoPlus } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

import user from "/SJ.jpg";
const HomeRightComp = () => {
  return (
    <HomeRight>
      <div className="friend-request">
        <div className="top">
          <p>Friend requests</p>
          <button>See all</button>
        </div>
        <li>
          <img src={user} alt="Photo" />
          <div>
            <div>
              <p>Sahjahan Ahmed</p>
              <span>12h</span>
            </div>
            <div>
              <button className="confirm-btn">Confirm</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </li>
        <li>
          <img src={user} alt="Photo" />
          <div>
            <div>
              <p>Sahjahan Ahmed</p>
              <span>12h</span>
            </div>
            <div>
              <button className="confirm-btn">Confirm</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </li>
      </div>
      <div className="contacts">
        <div className="top">
          <p>Contacts</p>
          <div>
            <button>
              <TbVideoPlus />
            </button>
            <button>
              <BiSearchAlt2 />
            </button>
            <button>
              <BsThreeDots />
            </button>
          </div>
        </div>
        <div className="contact-list">
          <li>
            <img src={user} alt="Photo" />
            <p>Sahjahan Ahmed</p>
          </li>
          <li>
            <img src={user} alt="Photo" />
            <p>Sahjahan Ahmed</p>
          </li>
          <li>
            <img src={user} alt="Photo" />
            <p>Sahjahan Ahmed</p>
          </li>
          <li>
            <img src={user} alt="Photo" />
            <p>Sahjahan Ahmed</p>
          </li>
          <li>
            <img src={user} alt="Photo" />
            <p>Sahjahan Ahmed</p>
          </li>
        </div>
      </div>
    </HomeRight>
  );
};

export default HomeRightComp;
