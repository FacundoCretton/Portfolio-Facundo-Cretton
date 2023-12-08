import React from "react";
import Typewriter from "typewriter-effect"


const Type = () =>{

    return(
        <Typewriter
        
            options={{
                strings: ["Web Developer", "Front-End Developer", "Back-End Developer", "Full-Stack Developer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,





            }}
        
        
        
        />


    )


}


export default Type;