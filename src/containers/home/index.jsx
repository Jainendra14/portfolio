import React from "react";
import './style.scss';
import { Animate } from "react-simple-animate";
import { Link } from "react-router-dom";
import resume from '../../img/jain-resume1.pdf';
import Contact from "../contact";
const Home=()=>{
  

    return(
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Hello, I'm Jainendra Singh
                    <br/>
                    Front end developer
                </h1>

            </div>
            <Animate 
            play
             duration={1.5}
            delay={1}
            start={{transform:"translateY(300px)",}}
            end={{
             transform: "translate(450px)"
            }}
            >
         
         
            </Animate>
            
            <div className="home_item">
               
                <Link to={'./Contact'} className="home_item_contact">Contact Me</Link>
                <a href={resume} download="jainendra-Resume" target="_blank" >
                    <button className="home_item_resume"> Resume</button>
                </a>
                
            </div>
           
        </section>
        
         
    ) 
}
  
export default Home;