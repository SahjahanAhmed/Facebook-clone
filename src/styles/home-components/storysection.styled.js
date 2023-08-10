import Styled from "styled-components";

const StorySection = Styled.div`
position: relative;
margin: 0 1rem;

@media screen and (max-width:700px){
    margin: 0;
}

.story-section-wrapper{
display: flex;
gap: 1rem;
overflow-x: auto;
margin: 1rem auto 0 auto;
padding: .2rem 0;


> div{
    box-shadow: 0 0 2px rgba(0, 0, 0, .3);
    cursor: pointer;

    &:hover{
    opacity: .8;
    transform: scale(1.01)
}
}

> .add-story{
    min-width: 140px;
    height: 220px;
    display: flex;
    flex-direction:column;
    border-radius: 1rem;
    background-color: #fff;
    position: relative;
  
 > div{
min-width: 140px;
height: 160px;
border-top-right-radius: 1rem;
border-top-left-radius: 1rem;
background-image: url('/SJ.jpg');
background-size: cover;
background-repeat: no-repeat;
  }
  
> button{
       position: absolute;
       top: 140px;
       left: 50%;
       transform: translateX(-50%);
       height: 40px;
       width: 40px;
       font-size: 1.5rem;
       border: 3px solid #fff;
       display: flex;
       align-items: center;
       justify-content: center;
       border-radius: 50%;
       background-color: #1877f2;
       color: #fff;
       cursor: pointer;
       
}

> p{
       text-align: center;
       margin-top: 2rem;
       font-family: sans-serif;
       font-size: .8rem;

 } 
  
}

> .story {
    min-width: 140px;
    height: 220px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: .6rem ;
    background-image: url('/SJ.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    transition: all .15s ease-in-out;

  >  img{
      width: 2.5rem;
      height: 2.5rem;
      border-radius:50%;
      border: 4px solid rgb(80, 100, 250);
    }

    >p{
        color: #fff;
        font-family: sans-serif;
        font-size: .8rem;
    }

}

.scroll-btn{
    position: absolute;
    top: 50%;
    transform : translateY(-50%);
    border: none;
    background-color: #fff;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, .5);

    &:hover{
        background-color: lightgray;
    }

}

.scroll-btn.right{
   right: 0;
}

.scroll-btn.left{
   left: 0;

}
}
`;

export { StorySection };
