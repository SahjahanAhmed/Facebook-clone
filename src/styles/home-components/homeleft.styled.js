import Styled from "styled-components";

const HomeLeft = Styled.div`
@media screen and (max-width : 700px){
display: none;
min-width:100%;
}
ul {
    display: flex;
    flex-direction: column;
    margin: 1rem .5rem;
    gap: .5rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid rgba(0,0,0,.3);

    li{
        display: flex;
        align-items: center;
        gap: .5rem;
        cursor: pointer;
        font-weight: bold;
        padding: .5rem;
        border-radius: .5rem;

        img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
        }

        button{
            border-radius: 50%;
            height: 2rem;
            width: 2rem;
            border: none;
            background-color: transparent;
            font-size: 1.7rem;
            color: rgb(20, 100, 220);
            cursor: pointer;

        }

        .saved-btn{
            color: rgb(184, 98, 184);
        }

        .see-more-btn{
            background-color: rgba(0, 0, 0, .1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
        }

        p{
            font-family: sans-serif;
            color: #222;
         }

        &:hover{
            background-color:#9992;
        }
    }
}

`;

export { HomeLeft };
