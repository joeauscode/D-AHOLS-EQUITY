import styled from "styled-components";
import portfol from '../assets/image/portfol.jpg';
import image from '../assets//image/background.jpg'
// import Portfolio from "./Portfolio";


export const Navbar = styled.nav`

/* background: #f9fafb; */

font-family: 'Poppins', sans-serif;
/* background-color: #1A1A1A; */
background-color: #f9fafb;
color: #ffd700;
z-index: 10;
font-size: 17px;
 position: fixed;
 right: 0;
 top: 0;
 width: 100%;
 padding: 5px 0px;


 .loading{
    position: fixed;
    width: 10%;
    justify-content: center;
    top: 50%;
    right: 40%;
    left: 45%;
 }

 .blur{
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    z-index: 9;
    left: 0;
    width: 100%;
    height: 100vh;
    cursor: pointer;
}

 a{
    text-decoration: none;
    color: #245d63;
 }
 a:hover{
color: wheat;
transform: scale(1.2);
 }


.main{
    color: whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: auto;
    text-transform: capitalize;
  
}

.middle{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-left: 4rem;
}

.right{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.right:hover{
    transform: scale(1.1);
}
.left{
    cursor: pointer;
    width: 200px;
}

.left>img{
    width: 100%;
    
}


.menbar{
    display: none;
}

.rightnave{
    display: none;
}

@media screen and (max-width: 900px) {
    
    .rightnave{
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        padding: 16px 0px;
        font-size: 20px;
    
    }
    .mobilenaves{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    /* .mobilelogin{
        display: flex;
        flex-direction: column;
    } */
    .right, .middle{
        display: none;
    }

    .menbar{
        display: block;
        font-size: 30px;
        color: #245d63;
    }

    .main{
        width: 100%;
        padding: 0px 15px;
    }

    .loading{
        width: 100%;
        left: 38%;
    }

    .left{
        width: 40%;
    }
}
`



export const Home = styled.main`
background-image: url(${image});
width: 100%;
background-size: cover;
background-position: center;
object-fit: cover;
background-repeat: no-repeat;
height: calc(100vh + 200px);
display: flex;
justify-content: center;
align-items: center;
position: relative;
border: 1px solid;
font-family: 'Inter', sans-serif;

 .blur{
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    z-index: 9;
    left: 0;
    width: 100%;
    height: 100vh;
    cursor: pointer;
}

.main{
    width: 80%;
    margin: auto;
    color: whitesmoke;
    padding: 10px 20px;
    position: absolute;
    display: flex;
    gap: 2rem;
    top: 15%;
    align-items: center;
   
}

h1{
    font-size: 20px;
    font-weight: 900;
}

.mybtn{
    border: none;
    background-color: transparent;
    text-decoration: underline;
    color:yellow ;
}

.chart{

    flex: 1;
     background-color: #FACC15;
     height: 260px;
     display: flex;
     flex-direction: column;
     padding: 10px 20px;
     border-radius: 10px;
     gap: 10px;
     rotate: calc(4deg);
     justify-content: space-between;
     cursor: pointer;
}

.chart:hover{
    rotate: none;
    transform: scale(1.03);
}

.phonebounce{
position: absolute;
top: -20%; 
justify-content: end; 
width :95% ;
font-size: 30px;
display: flex;
}

.phonebounce span{
    padding: 6px 12px;
    background-color: red;
    border-radius: 100%;
}



@keyframes phonebounce {
  0% { transform: translate(1px, 1px) rotate(1deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
  50% {transform: translate(2px, 1px) rotate(2deg)}
}

.phonebounce {
  animation: phonebounce 1.5s;
  animation-iteration-count: infinite;
}




@media screen and (max-width: 900px) {

    .main{
        width: 100%;
        flex-direction: column-reverse;
              
    }

    .chart{
     margin-top: -3rem;
      rotate: none;
      width: 100%;
      gap: 8px;
      font-size: 20px;
      justify-content: space-between;

    }

   .box> div{
      padding: 15px 15px !important;
   }
}
`



export const Footers = styled.footer`
background: #111827;
color: #f5f5f5;
font-family: 'Inter', sans-serif;

.footter{
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10px;
    align-items: center;
}

.EQUITY{
    font-size: 14px;
}

.icon{
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    gap: 17px;
    align-items: center;
    cursor: pointer;
    
}

@media screen and (max-width: 900px) {

    .footter{

        width: 95%;
        flex-direction: column;
        gap: 10px;
    }
   .EQUITY{
    font-size: 12px;
}

.icon>span{
    font-size: 20px;
}

}

`



export const Loginpage = styled.main`

background-color: lightgray;
border: 1px solid lightgray;
font-family: 'Inter', sans-serif;
position: relative;
.main{
    margin-top: 7rem;
    width: 100%;
}

form{
width: 45%;
display: flex;
flex-direction: column;
background-color: whitesmoke;
margin: auto;
padding: 20px 30px;
border-radius: 10px;
margin-bottom: 4rem;
}

h1{
    font-size: 25px;
}



input{
    width: 100%;
    padding: 10px 10px;
    border-radius: 10px;
    outline: none;
    border: 2px solid lightgray;  
}

input:hover{
    border: 1px solid lightgreen;
}

.inputs{
    display: flex;
    /* width: 100%; */
    /* justify-content: space-between; */
    margin-block: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;

}
.inputs>div>label{
 display: block;
 font-size: 14px;
}

.inputs>div{
 width: 100%;
 margin-block: 8px;
}

.button{
    font-size: 11px;
    display: flex;
    flex-direction: column;
}

.btn{
    width: 100%;
    background-color: #1A1A1A;
    color: whitesmoke;
    font-size: 16px;
}

.btn:hover{
    background-color: #28a745;
    transform: scale(1.05);
}




/* .login */
.loginform{
    /* position: absolute; */
    width: 100%;
    top: 25%;
z-index: 9;

}

.form{
    position: absolute;
 top: 25%;
z-index: 9;
 right: 40%;
 left: 36%;
}
.Loginpop{
    display: flex;
    justify-content: space-between;
    margin-block: 10px;
    
}

.mylogin{
    cursor: pointer;
    background-color: #1A1A1A;
    padding: 5px 10px;
    color: whitesmoke;
    border-radius: 10px;
}

.mylogin:hover{
    background-color: #28a745;
    transform: scale(1.05);
}


 .loading{
    position: absolute;
    width: 10%;
    justify-content: center;
    top: 50%;
    right: 40%;
    left: 45%;
    z-index: 10;
 }

/* blurscreen */
.blur{
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    z-index: 9;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}


@media screen and (max-width: 900px) {
    
    .loading{
        width: 40%;
        left: 30%;
        right: 0;
    }
    form{
        width: 95%;
    }

    .form{
        width: 80% !important;
        left: 0;
        right: 0;
    }
}

`



export const Conactform = styled.main`
font-family: 'Inter', sans-serif;
border: 1px solid white;
background-color: lightgray;

.main{
    margin-top: 7rem;
}
form{
    width: 40%;
    margin: auto;
    padding: 20px 20px;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin-bottom: 2rem;
    background-color: whitesmoke;
   
}

h1{
    padding: 0px 20px;
    font-size: 20px;
}

.form{
    width: 100%;
        display: flex;
    gap: 10px;

    flex-direction: column;
    padding: 20px 20px;

}


.form>div{
    width: 100%;

}

input{
    width: 100%;
    padding: 10px 7px;
    border-radius: 10px;
    border: 2px solid lightgray;
    outline: none;
}

input:hover{
    border: 1px solid lightgreen;
}

textarea:hover{
border: 1px solid lightgreen;
}

label{
    text-transform: capitalize;
    font-size: 14px;
}


textarea{
    outline: none;
    width: 100%;
     padding: 10px 7px;
    border-radius: 10px;
    border: 2px solid lightgray;
    height: 100px;
}
label{
    display: block;
}
.form{

}

.btn{
    width: 100%;
    background-color: #1A1A1A;
    color: whitesmoke;
}

.btn:hover{
     background-color: #28a745;
    transform:scale(1.05);
}


 .loading{
    position: fixed;
    width: 10%;
    justify-content: center;
    top: 50%;
    right: 40%;
    left: 45%;
 }

 .blur{
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    z-index: 9;
    left: 0;
    width: 100%;
    height: 100vh;
    cursor: pointer;
}


@media screen and (max-width: 900px) {
    
    form{
        width: 95%;
    }
}
`



export const Aboutus = styled.main`
background-color: lightgray;
border: 1px solid lightgray;

h1{
    font-size: 23px;
}
.main{
    margin-top: 10rem;
    margin-bottom: 2rem;  
}

section{
    display: flex;
    margin: auto;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.image{
    flex: 1;
    box-shadow: 1px 1px 2px;
    width: 20%;
    border-radius: 10px;
    cursor: pointer;
    rotate: calc(2deg);
    background-color: whitesmoke;
    padding: 10px 10px;
}

.image:hover{
    rotate: none;
}

@keyframes image {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

img {
  animation: image 2s;
  animation-iteration-count: infinite;
  width: 100%;
}


@media screen and (max-width: 900px) {
    
    main{
        width: 100%;
    }

    section{
        flex-direction: column-reverse;
        width: 95%;
    }

    .image{
        width: 100%;
        rotate: none;
        margin-top: -4rem;
    }
}
`



export const Portfolios = styled.main`
  /* border: 1px solid lightgray; */
  /* background-color: lightgray; */
  font-family: 'Inter', sans-serif;
  font-size: 15px;
color: white;
  background-image: url(${portfol});
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 0;

h2{
    margin-top: 10rem;
    font-size: 18px;
}
 .main{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
 }

 section{
    margin-bottom: 6rem;
 }
ul{
 list-style-type: circle;
 display: flex;
 flex-direction: column;
 gap: 16px;
}



@keyframes shake {
    50% {transform: translate(-1px, 1px ) rotate(1deg)}
    100% {transform: translate(1px, 2px ) rotate(1deg)}
}

.images{
    width: 50%;
    margin-top: 5rem;
    box-shadow: 2px 2px 4px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
    rotate: calc(-5deg);
    cursor: pointer;
    animation: shake 1s;
    animation-iteration-count: infinite;
}

.images:hover{
    rotate: none;
}


img{
    width: 100%;   
       border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;   
}


@media screen and (max-width: 900px) {
    .main{
        flex-direction: column-reverse;
        width: 95%;
    }

    section{
        width: 100%;
        margin-top: -7rem;
        font-size: 16px;
    }

    .images{
        width: 100%;
        border-radius: 0;
        rotate: none;
    }
    img{
        border-radius: 0;
    }
}

`