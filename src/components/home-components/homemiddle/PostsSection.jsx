import React, { useState } from "react";

import { PostSection } from "../../../styles/home-components/postssection.styled";

import { RiLiveFill } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiLaughing } from "react-icons/bs";

import user from "/SJ.jpg";
import CreatePostModal from "../../createpost-modal/CreatePostModal";
const PostsSectionComp = () => {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <PostSection>
      <div className="top">
        <img src={user} alt="Photo" />
        <input
          type="text"
          placeholder="Whats on you mind ?"
          onClick={(e) => {
            setShowPostModal(!showPostModal);
            e.target.disabled = "true";
          }}
        />
        {showPostModal && (
          <CreatePostModal setShowPostModal={setShowPostModal} />
        )}
      </div>
      <div className="bottom">
        <button>
          <span className="live-camera">
            <RiLiveFill />
          </span>
          Live video
        </button>
        <button>
          <span className="photo-video">
            <IoMdPhotos />
          </span>
          Photo / video
        </button>
        <button>
          <span className="emoji">
            <BsEmojiLaughing />
          </span>
          Feeling / Activity
        </button>
      </div>
    </PostSection>
  );
};

export default PostsSectionComp;
