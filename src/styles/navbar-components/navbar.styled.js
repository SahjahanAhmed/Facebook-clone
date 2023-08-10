import Styled from "styled-components";

const Container = Styled.div`
position: sticky;
top: 0;
z-index: 100;
background-color: #fff;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
padding: 0 1rem;
box-shadow: 0 0 4px rgba(0, 0, 0, .2);
min-height: 51px;

@media screen and (max-width:700px){
    grid-template-columns: 1fr 1fr;
    gap: .3rem;
}

`;

const Left = Styled.div`
display: flex;
align-items: center;
gap: .7rem;

.search-box{
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    position: relative;


   > input{
        width: 100%;
        padding: .6rem;
        border-radius: 1rem;
        border: none;
        outline: none;
        background-color: #9993;

        &::placeholder{
          padding-left: 1.3rem;
       }

    }

    label{
       position: absolute;
       left: .5rem;
       top: 50%;
       transform: translateY(-50%);
       display: flex;
       align-items: center;
       cursor: pointer;
       color: #999999;

    }

    > .menu-btn{
        border: none;
        padding: .3rem;
        border-radius: 50%;
        width: 100%;
        max-width: 40px;
        min-height: 40px;
        display:none;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        background-color: transparent;
        cursor: pointer;

        &:hover{
            background-color: #9995;
        }

        @media screen and (max-width: 700px){
            display: flex;
        }
    }

}
`;

const Logo = Styled.img`
width: ${(props) => (props.showsearchresultbox === "true" ? "0%" : "100%")};
max-width: 40px;
cursor: pointer;
transition: all 0.3s ease-in-out;
`;

const Right = Styled.div`
/* border: 1px solid black; */
display: flex;
align-items: center;
justify-content: flex-end;
gap: .5rem;

.nav-right-first-div{
    display: flex;
    align-items: center;
    gap: .5rem;
    position: relative;

    button{
        border: none;
        width: 40px;
        height: 40px;
        background-color: #9993;
        border-radius: 50%;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        a{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            width: 100%;
            height: 100%;
        }

        &:hover{
            background-color: #9994;
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
}

.nav-right-profile-btn{

    position: relative;

    &:hover::before{
    content: attr(tooltip);
    position: absolute;
    top: calc(100% + .5rem);
    right: 50%;
    background-color: #444;
    color: #fff;
    font-size: .8rem;
    padding: .5rem;
    border-radius: .5rem;
    text-align: center;
    font-family: sans-serif;
    box-shadow: 0 0 4px rgba(0, 0, 0, .5);

}

  
   &:hover::after{
    content: '';
    position: absolute;
    top: calc(100%);
    right: 50%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 16.6px solid #444;
    transform: rotate(30deg);
} 
}

.nav-right-profile-btn img{
width: 100;
max-width: 40px;
border-radius: 50%;
}
`;
export { Container, Left, Logo, Right };
