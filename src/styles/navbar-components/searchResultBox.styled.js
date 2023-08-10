import Styled from "styled-components";

const SearchResultBoxContainer = Styled.div`
position: absolute;
top: calc(100% + .5rem);
right: 50%;
width: 100%;
height: auto;
max-height: 500px;
overflow-y: auto;
overflow-x: hidden ;
transform: translateX(50%);
box-shadow: 0  0  4px rgba(0, 0, 0, .3);
border-radius: 1rem;
z-index: 1;
background-color: #fff;
display: flex;
`;

const SearchResultList = Styled.ul`
display: flex;
flex-direction: column;
gap: .6rem;
width: 100%;

li{
    padding: .5rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;

    img{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }

     p{
        font-weight: 550;
        font-family: sans-serif;
    }

    &:hover{
        background-color: #9995;
      }
}
`;

export { SearchResultBoxContainer, SearchResultList };
