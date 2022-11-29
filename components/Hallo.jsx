import * as $ from './HalloEl'
import React from 'react'
import {Bodycontainer, Cardcontainer, Part1, Part2, Imgcontainer,Textcontainer, Star, Button} from './HalloEl'
import Imgpnj from '../images/c_coding.jpg';
import Imgstr from '../images/stars.svg'

const Hallo = () => {
  return (
    <div>
    <Bodycontainer>
    
      <Cardcontainer>
       <Part1>
        <Imgcontainer>
        
         
         <$.img src={Imgpnj}/>
                   
        
        </Imgcontainer>
       <Textcontainer>
         <$.line1>
           <$.h5>C Programming: Zero to  Hero</$.h5>
           
           <Star src={Imgstr}  
          ></Star>
           
          </$.line1>
          <$.line2>
          <$.p>Instructor:[Maheem Shahreear]</$.p>
              
          </$.line2>
          <$.line3>
          <$.p>$37.43</$.p>
          </$.line3>
          <$.line4>
          <$.p>38  hours total. 258 lectures. All levels</$.p>
          </$.line4>
          <$.line5>
          <Button>Buy Course</Button>
          <$.p>153k enrolled</$.p>
          </$.line5>          
       
       </Textcontainer>  


       </Part1> 
       <Part2>
       <$.gol1></$.gol1>
       <$.gol2></$.gol2>       
       </Part2>


      
      </Cardcontainer>
    
    </Bodycontainer>
    
    
    
    </div>
  )
}

export default Hallo