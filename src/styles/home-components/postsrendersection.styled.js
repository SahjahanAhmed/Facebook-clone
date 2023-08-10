import Styled from "styled-components";

const PostsRenderSection = Styled.div`
width: 85%;
margin: 0rem auto 0 auto;
padding: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;


@media screen and (max-width:700px){
    width: 100%;
}

> .post{
box-shadow: 0  0 4px rgba(0, 0, 0, .3);
border-radius: 1rem;
display: flex;
flex-direction: column;
gap: .5rem;
background-color: #fff;

> .top{
    display: flex;
    justify-content: space-between;
    margin: 1rem 1rem 0 1rem;


    > .left {
        display: flex;
        align-items:center;
        gap: .5rem;
       
       img{
         width: 3rem;
         height: 3rem;
         border-radius: 50%;
         cursor: pointer;
       }

     
     
     > div{
        
          > p.name{
            font-size: 1rem;
            font-family: sans-serif;
            font-weight: bold;
            cursor: pointer;
            color: #000;
            }

        > p{
            font-size: .8rem;
            color: gray;
        }
       }
     
     
       
    }

    > .right{
        display: flex;
        gap: 1rem;

        > button{
            border: none;
            background-color: transparent;
            cursor: pointer;
            height: 2rem;
            width: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 1.2rem;
            color: #444;
            padding: .2rem;

            &:hover{
                background-color: #9995;
            }
        }
    }
 }
}


.middle{
    display: flex;
    flex-direction:column;
    gap:1rem;
   > p{
    margin: 1rem 1rem 0 1rem;
    }

   > img {
    object-fit: cover;
    width: 100%;
   }
   
}


 .bottom{
    margin: 0 1rem 0 1rem;
    position: relative;


    > .engagement-amount{
        width: 100%;
        border-bottom: 1px solid lightgray;
        padding: .5rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: sans-serif;
        font-size: .8rem;

        > p{
        cursor: pointer;
        color: gray;
        }
    }

    > .engagement-buttons{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .5rem;
        padding: .2rem 0;

        @media screen and (max-width: 400px){
        gap: .2rem;
        padding: 0;
        justify-content: center;
        }       

        .like-btn{
            > p{
                font-size: 1rem;
                font-family: sans-serif;

                @media screen and (max-width: 400px){
                font-size: .8rem;
                }       
            }
        }


        > button,.like-btn{
            padding: .5rem;
            flex-grow: 1;
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            color: #555;
            font-weight: bold;

            @media screen and (max-width: 400px){
            gap: .2rem;
            font-size: .8rem;
            }       


             > .floating-buttons{
                background-color: #fff;
                box-shadow: 0  0 4px rgba(0, 0, 0, .5);
                padding: .2rem .5rem;
                border-radius: 1rem;
                position: absolute;
                display: flex;
                align-items: center;
                gap: .5rem;
                top: 2px;
                left: 4px;
                z-index: 100;
                overflow: visible;

                > .like{
                    background-color: #1877f2;
                    color: #fff;
                }

                > .heart{
                    background-color: red;
                    color: #fff;
                }

                > .care {
                    color: red;
                }

                > .haha,.wow,.sad{
                    color: darkorange;
                }

                > .angry{
                    color: darkred;
                }

                > button{
                    transition: all .15s ease-in-out;
                    cursor: pointer;
                    border: none;
                    background-color: transparent;
                    border-radius: 50%;
                    padding: .3rem;
                    display: flex;
                    align-items: center;
                    font-size: 1.8rem;
                    position: relative;

                    @media screen and (max-width: 400px){
                    font-size: 1rem;
                    }

                    &:hover{
                        transform: scale(1.2) translateY(-.1rem);

                        &::after{
                            content: attr(tooltip);
                            position: absolute;
                            top: 100%;
                            left: 50%;
                            transform: translateX(-50%);
                            font-size: .7rem;
                            font-weight: bold;
                            background-color: #555;
                            color: #fff;
                            padding: .3rem;
                            border-radius: 1rem;
                            display: flex;
                            align-items: center;
                        }
                       
                    }
                }
            }


            > span{
                font-size: 1.3rem;
                display: flex;
                align-items: center;
            }

            &:hover{
                background-color: rgba(0, 0, 0, .08);
            }
        }
    }

}
   
`;

export { PostsRenderSection };
