import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import {
  Container,
  Modal,
} from "../../styles/createpost-modal/createpost-modal.styled";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import user from "/SJ.jpg";
const CreatePostModal = ({ setShowPostModal }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [textareaText, setTextareatext] = useState("");
  return (
    <Container>
      <Modal>
        <div className="top">
          <h2>Create Post</h2>
          <button onClick={() => setShowPostModal(false)}>
            <RxCross1 />
          </button>
        </div>
        <div className="user-details">
          <img src={user} alt="Your profile photo" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="contents">
          <div className="emoji-picker">
            <button
              className="toggle-emoji-btn"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <BsEmojiSmile />
            </button>
            {showEmojiPicker && (
              <Picker
                data={data}
                onEmojiSelect={(e) => setTextareatext(textareaText + e.native)}
              />
            )}
          </div>
          <textarea
            placeholder="What's on your mind?"
            onChange={(e) => setTextareatext(e.target.value)}
            value={textareaText}
          />
          <img src={user} alt="" />
        </div>
        <button className="post-btn">Post</button>
      </Modal>
    </Container>
  );
};

export default CreatePostModal;
