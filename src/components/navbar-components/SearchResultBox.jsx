import React from "react";
import {
  SearchResultBoxContainer,
  SearchResultList,
} from "../../styles/navbar-components/searchResultBox.styled";

import img from "/logo.png";
const SearchResultBox = () => {
  return (
    <SearchResultBoxContainer>
      <SearchResultList>
        <li>
          <img src={img} alt="img" />
          <p>Mumin Ahmed Sunny</p>
        </li>
        <li>
          <img src={img} alt="img" />
          <p>Jamil Ahmed</p>
        </li>
      </SearchResultList>
    </SearchResultBoxContainer>
  );
};

export default SearchResultBox;
