import Styled from "styled-components";

const Middle = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width:700px){
    display: none;
}

a{
    text-decoration: none;
    color: #555;
    font-size: 1.8rem;
    width: 100%;
    padding: .5rem 0;
    margin: 3px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    position: relative;

    &:hover{
        background-color: #9993;
    }

    &.active{
        &::after{
            content: '';
            position: absolute;
            width: 100%;
            top: 100%;
            border: 1.5px solid currentColor;
        }
           
    }

    &:hover::before{
        content: attr(tooltip);
        position: absolute;
        top: calc(100% + .5rem);
        background-color: #444;
        color: #fff;
        font-size: .8rem;
        padding: .5rem;
        border-radius: .5rem;
        text-align: center;
        font-family: sans-serif;
        box-shadow: 0 0 4px rgba(0, 0, 0, .5);
    }

}
`;

export { Middle };
