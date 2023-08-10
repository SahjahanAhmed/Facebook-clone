import Styled from "styled-components";

const PostSection = Styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 80%;
margin: 0 auto;
background-color: #fff;
border-radius: 1rem;
padding: 1rem;
box-shadow: 0 0 2px rgba(0, 0, 0, .3);

@media screen and (max-width:700px){
    width: 94%;
}

> .top{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-bottom: 1px solid lightgray;
    padding-bottom: 1rem;
   > img{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        cursor: pointer;
    }

   > input{
        outline: none;
        padding: .8rem;
        font-size: 1rem;
        background-color: rgba(0, 0, 0, .05);
        border-radius: 2rem;
        flex-grow: 1;
        border: none;
        cursor: pointer;
    }
}

> .bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 400px){
    justify-content: center;
    
    }       

    > button{
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-weight: bold;
        color: gray;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: .5rem;
        border-radius: .5rem;

       > span{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        }

       > .live-camera{
            color: red;
        }

        > .photo-video{
            color: green;
        }

       > .emoji {
        color: orange;
        }

        &:hover{
            background-color: whitesmoke;

        }
    }
}
`;

export { PostSection };
