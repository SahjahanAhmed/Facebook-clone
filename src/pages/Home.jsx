import React from "react";
import { Container } from "../styles/home.styled";

import HomeLeftComp from "../components/home-components/HomeLeft";
import HomeMiddleComp from "../components/home-components/HomeMiddle";
import HomeRightComp from "../components/home-components/HomeRight";
const Home = () => {
  return (
    <Container>
      <HomeLeftComp />
      <HomeMiddleComp />
      <HomeRightComp />
    </Container>
  );
};

export default Home;
