import React, { useState } from "react";

import { PostsRenderSection } from "../../../styles/home-components/postsrendersection.styled";

import { BiDotsHorizontalRounded, BiMessage } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineLike, AiTwotoneHeart } from "react-icons/ai";
import { RiUserHeartFill } from "react-icons/ri";
import { FaRegLaughSquint, FaRegSadTear } from "react-icons/fa";
import { BsEmojiAngry, BsEmojiDizzy } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";

import user from "/SJ.jpg";
const PostsRenderSectionComp = () => {
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);
  return (
    <PostsRenderSection>
      <div className="post">
        <div className="top">
          <div className="left">
            <img src={user} alt="" />
            <div>
              <p className="name">Sahjahan Ahmed</p>
              <p>3d</p>
            </div>
          </div>
          <div className="right">
            <button>
              <BiDotsHorizontalRounded />
            </button>
            <button>
              <RxCross1 />
            </button>
          </div>
        </div>
        <div className="middle">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            velit eum consequatur deserunt totam ullam voluptatibus tenetur
            quisquam provident blanditiis, incidunt alias ut mollitia id autem
            temporibus illum? Sint, officiis?
          </p>
          <img src={user} alt="" />
        </div>
        <div className="bottom">
          <div className="engagement-amount">
            <p>100k Likes</p>
            <p>27 comments</p>
          </div>
          <div className="engagement-buttons">
            <div
              className="like-btn"
              onMouseEnter={() => setShowFloatingButtons(true)}
              onMouseLeave={() => setShowFloatingButtons(false)}
            >
              <span>
                <AiOutlineLike />
              </span>
              <p>Like</p>
              {showFloatingButtons && (
                <div className="floating-buttons">
                  <button className="like" tooltip="Like">
                    <AiOutlineLike />
                  </button>
                  <button className="heart" tooltip="Love">
                    <AiTwotoneHeart />
                  </button>
                  <button className="care" tooltip="Care">
                    <RiUserHeartFill />
                  </button>
                  <button className="haha" tooltip="Haha">
                    <FaRegLaughSquint />
                  </button>
                  <button className="wow" tooltip="Wow">
                    <BsEmojiDizzy />
                  </button>
                  <button className="sad" tooltip="Sad">
                    <FaRegSadTear />
                  </button>
                  <button className="angry" tooltip="Angry">
                    <BsEmojiAngry />
                  </button>
                </div>
              )}
            </div>
            <button>
              <span>
                <BiMessage />
              </span>
              comments
            </button>
            <button>
              <span>
                <PiShareFatLight />
              </span>
              Share
            </button>
          </div>
        </div>
      </div>
    </PostsRenderSection>
  );
};

export default PostsRenderSectionComp;
