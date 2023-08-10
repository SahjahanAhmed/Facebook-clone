import Styled from "styled-components";

const HomeRight = Styled.div`
padding: 1rem;

.friend-request{
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    > .top{
        display: flex;
        align-items: center;
        justify-content: space-between;

      >  p{

        font-family: sans-serif;
        color: #555;
        font-weight: bold;

        }
        > button{
            border: none;
            background-color: transparent;
            color: #1877f2;
            cursor: pointer;
        }
    }

   > li{ 
        width: 100%;
        display: flex;
        list-style: none;
        gap: .5rem;
        border-radius: 1rem;
        padding: .5rem;
        
        &:hover{
           background-color: #9993;
        }

      >  img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
        }
    > div{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        & > div:nth-of-type(1){
            display: flex;
            justify-content: space-between;

            > p{
                font-weight: bold;
                font-family: sans-serif;
            }
            > span{
                font-family: sans-serif;
                font-size: .8rem;
                color: #888;
            }
        }

        & > div:nth-of-type(2){
            display: flex;
            flex-wrap: wrap;
            gap: .5rem;
            > button{
                border: none;
                color: #fff;
                padding: .5rem;
                border-radius: .5rem;
                cursor: pointer;
            }

            & > button:nth-of-type(1){
                background-color: #1877f2;

                 &:hover{
                    background-color: #1855f2 !important;
                 }
                
            }
            & > button:nth-of-type(2){
               background-color: lightgray;
               color: #000;

               &:hover{
                background-color: darkgray;
               }
    
            }
        }
    }

    }
}

> .contacts{
    margin-top: 1rem;
    display: flex;
   flex-direction: column;
   gap: .5rem;

  > .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #555;
    font-family: sans-serif;
    font-weight: bold;


    > div{
        display: flex;

        > button{
            font-size: 1.2rem;
            color: #555;
            border: none;
            background-color: transparent;
            cursor: pointer;
            display: flex;
            align-items: center;
            border-radius: 50%;
            padding: .3rem;

            &:hover{
            background-color: #9995;
            }
        }
    }
   }


  > .contact-list{
    display: flex;
    flex-direction: column;
    gap: .5rem;

    > li{
        list-style: none;
        display: flex;
        align-items: center;
        gap: .5rem;
        width: 100%;
        cursor: pointer;
        padding: .5rem;
        border-radius: 1rem;

        &:hover{
            background-color: #9995;
        }

        > img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
        }
        > p{
            font-family: sans-serif;
            font-weight: bold;
        }
    }
  }
}

@media screen and (max-width : 700px){
display: none;
}
`;

export { HomeRight };
