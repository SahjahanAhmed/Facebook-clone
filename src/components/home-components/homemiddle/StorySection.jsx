import React, { useRef, useState } from "react";
import { StorySection } from "../../../styles/home-components/storysection.styled";

import { AiOutlinePlus } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import user from "/SJ.jpg";
const StorySectionComp = () => {
  const [storyScrollLeft, setStoryScrollLeft] = useState(0);
  const storySectionRef = useRef("");
  const storyScroll = (dir, scrollEl) => {
    if (dir === "LEFT") {
      scrollEl.scrollLeft -= 420;
      setStoryScrollLeft(storyScrollLeft - 420);
    }
    if (dir === "RIGHT") {
      scrollEl.scrollLeft += 420;
      setStoryScrollLeft(storyScrollLeft + 420);
    }
  };

  return (
    <StorySection>
      <div className="story-section-wrapper" ref={storySectionRef}>
        <div className="add-story">
          <div></div>
          <button>
            <AiOutlinePlus />
          </button>
          <p>Create a story</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        <div className="story">
          <img src={user} alt="Image" />
          <p>Sahjahan Ahmed</p>
        </div>
        {storyScrollLeft > 0 && (
          <button
            className="scroll-btn left"
            onClick={() => storyScroll("LEFT", storySectionRef.current)}
          >
            <FaChevronLeft />
          </button>
        )}
        <button
          className="scroll-btn right"
          onClick={() => storyScroll("RIGHT", storySectionRef.current)}
        >
          <FaChevronRight />
        </button>
      </div>
    </StorySection>
  );
};

export default StorySectionComp;
