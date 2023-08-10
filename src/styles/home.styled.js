import Styled from "styled-components";

const Container = Styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
height: calc(100vh - 51px);

@media screen and (max-width : 700px){
display: flex;

}

> div{
    overflow-y: auto;
}   

`;

export { Container };
