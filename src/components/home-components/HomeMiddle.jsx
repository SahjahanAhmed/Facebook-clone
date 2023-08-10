import React from "react";
import { HomeMiddle } from "../../styles/home-components/homemiddle.styled";

import StorySectionComp from "./homemiddle/StorySection";
import PostsSectionComp from "./homemiddle/PostsSection";
import PostsRenderSectionComp from "./homemiddle/PostsRenderSection";
const HomeMiddleComp = () => {
  return (
    <HomeMiddle>
      <StorySectionComp />
      <PostsSectionComp />
      <PostsRenderSectionComp />
    </HomeMiddle>
  );
};

export default HomeMiddleComp;
