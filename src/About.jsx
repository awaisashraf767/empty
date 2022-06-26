import React from "react";
import Common from "./Common";
import web from "../src/image/about1.PNG"


const About= ()=>{
  

    return(
        <React.Fragment>
           <section className="header">
         <div className="container">
             <div className="row">
                <Common name='Welcome to about page '
                    go='Contact Us'
                    img={web}
                    path='/contact'
                />
             </div>
         </div>
         </section>
          
        </React.Fragment>
            )
}
 
export default About;
