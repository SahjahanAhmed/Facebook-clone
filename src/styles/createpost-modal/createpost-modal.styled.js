import Styled from "styled-components";

const Container = Styled.div`
position: fixed;
z-index: 9999;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(255, 255, 255, .7);
display: flex;
align-items: center;
justify-content: center;
`;

const Modal = Styled.div`
width: 90%;
height: 100%;
max-width: 500px;
height: 500px;
border-radius: 1rem;
background-color: #fff;
box-shadow: 0 0 4px rgba(0, 0, 0, .5);
padding: .5rem;
position: relative;
overflow: hidden;



> .top{
    display: flex;
    justify-content: center;
    position: relative;
    padding: 1rem;
    border-bottom: 1px solid lightgray;

    > h2{
        font-family: sans-serif;
    }

    > button{
        position: absolute;
        top: .8rem;
        right: 1rem;
        border: none;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .1);
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        padding: .5rem;
        cursor: pointer;

        &:hover{
            background-color: rgba(0, 0, 0, .3);

        }
    }
}

> .user-details{
    margin: .5rem;
    display: flex;
    gap: .5rem;
    align-items: center;

   > p{
    font-family: sans-serif;
    font-weight: bold;
   }

   > img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    }
}

> .contents{
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-Y: auto;

    > .emoji-picker{
        width: 20px;
        height: 20px;
        right: 4px;
        position: absolute;

        > .toggle-emoji-btn{
            border: none;
            font-size: 1rem;
            background-color: #fff ;
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            &:hover{
                background-color: #9995;
            }
        }
    }
    
    em-emoji-picker{
        position: absolute;
        top: 0px;
        right: -20px;
        transform: scale(.8);

        &::before{
            content: '';
            position: absolute;
            top: -35px;
            right: -9px;
            border-left: 14px solid transparent;
            border-right: 14px solid transparent;
            border-bottom: 44.6px solid #112;
            transform: rotate(24deg);
        }
    }
    

    > textarea{
        border: none;
        outline: none;
        font-size: 1.2rem;
        resize: none;
        margin: .5rem 1rem 0 1rem;
        flex-grow: 1;
        max-height: 300px;
        min-height: 100px;
    }
}

> .post-btn{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding: .5rem;
    border: none;
    cursor: pointer;
    background-color: #1877f2;
    color: #fff;
    font-weight: bold;

    &:hover{
        background-color: #1866f2;
    }
}
`;

export { Container, Modal };
