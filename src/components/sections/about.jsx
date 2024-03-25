import React from "react";
import { PageWrapper } from "./sectionsStyles";
import ButtonRandom from "../../components/buttonRandom/buttonRandom";
import { AboutText, Sub } from "./aboutStyles";

const About = () =>{

    return(
        <PageWrapper>
            <h1> ¿Quién soy? </h1>
            <AboutText>
                <Sub>¡Hola! Soy Facundo Cretton, un apasionado desarrollador de 32 años con una historia única que ha moldeado mi camino hacia el mundo de la tecnología.
                </Sub>
     
            </AboutText>
            <ButtonRandom/>
        </PageWrapper>

    )

}


export default About;