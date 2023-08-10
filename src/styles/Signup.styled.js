import Styled from "styled-components";

const Container = Styled.div`
display: flex;
flex-direction: column;
width: 100%;
img{
    width: 16rem;
    margin: 0 auto;
    margin-top: 1rem;

}

h2{
    font-family: sans-serif;
    margin: 0 auto;
    margin-top: 1rem;
    color: #444;
}
`;

const Form = Styled.form`
width 100%;
max-width : 400px;
margin: 0 auto;
padding: 0 1rem;


input,button{
    width: 100%;
    padding: .7rem .5rem ;
    margin-top: 1rem;
    outline: none;
    border: none;
    box-shadow: 0 0 2px #999;
    border-radius: .5rem;

    &:focus{
        box-shadow: 0 0 2px #666;
    }
}

button{
    cursor: pointer;
    background-color: rgb(13, 197, 13);
    font-weight: bold;
    letter-spacing: 1.5px;
    color: #fff;
    &:hover{
        background-color: rgb(13, 157, 13);
    }
}

& button:nth-of-type(2){
    background-color: transparent;
    box-shadow: 0 0 0 0;
    color: rgb(13, 103, 180);
}
`;

export { Container, Form };
