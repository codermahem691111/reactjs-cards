import styled from "styled-components";



 export  const Bodycontainer=styled.div`
 
 background-color:white;
 color: white;
 display: flex;
 justify-content: center; 
 margin-top: 60px;
 
 
 `;

export const Cardcontainer=styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;  



`;


export const Part1=styled.div`
    
height: 316px;
width:700px; 
 border-radius: 13px;
box-shadow: 30px -16px #021466; ;
 border: red;
 background-color: #d4d4d4; 
 display: flex;
 flex-direction: row;  

 @media screen and (max-width: 768px) {
    heigth:250px;
    width:500px;
  }

`;


export const Imgcontainer=styled.div`

display:flex;
justify-content: flex-start; 
align-items: center;
margin-top: -13px;
 
`;


export const img =styled.img`

height: 250px;
width: 250px;
border-image-outset: 0em;
border-radius: 30px;
margin-left: 5px;
margin-top: -20px;

`

export const Textcontainer=styled.div`

display: flex;
flex-direction: column;  
justify-content: flex-start;
align-items: flex-start;
margin-top: -40px;
height: 270px;
margin-top:20px;
@media screen and (max-width: 768px) {
    height:200px;
    width: 300px;
    
background:red;
  }


`
export const line1=styled.div`


display: flex; 
flex-direction: row; 
align-items: center; 


`


export  const h5=styled.h5`

 margin-left: 20px;
 color:blue;


`;

export const  Star=styled.img`


height: 100px;
width: 140px;
align-items: center; 
margin-left: 15px; 



`;

export const line2=styled.div``;

export const p=styled.p`

color:black;
font-size: 15px;
margin-left: 20px;

`;

export const  line3=styled.div``;
export const  line4=styled.div``;
export const  line5=styled.div`
display: flex; 
flex-direction: row; 
align-items: center; 
justify-content: flex-start;

`;


export const Button=styled.button`
background-color: #0066FF;
color:white;
font-size: 15px;
border-radius: 7px;
align-items: center;
margin-left: 20px;
margin-bottom: 10px;
border: white;

`;

export const Part2=styled.div`
margin-left:-700px;  
margin-top: -30px; 
@media screen and (max-width: 768px) {


  display : none;

}


`;


export  const gol1=styled.div`

position: absolute;
width: 700px;
height: 25px;



background: #2563eb;
box-shadow: 0px 4px 8px rgba(196, 196, 196, 0.25);
border-radius: 5px;
transform: rotate(-2deg);

@media screen and (max-width: 768px) {


  width:500px;


}


`;

export  const gol2=styled.div`

position: absolute;
width: 700px;
height: 25px;



background: #60a5fa;
box-shadow: 0px 4px 8px rgba(196, 196, 196, 0.25);
border-radius: 5px;
transform: rotate(2deg);

@media screen and (max-width: 768px) {


  width:500px;


}



`;
