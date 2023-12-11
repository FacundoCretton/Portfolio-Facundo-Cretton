import React from "react";
import { PageWrapper } from "../sectionsStyles";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { skills } from "./db-skills";
import "./tools.css";

const Tools = () =>{

    return(

        <PageWrapper>
            <h1>Tools Page </h1>
            <div className="cards-container">
            
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Control de versiones</Card.Title>
                        <hr/>
                        <Card.Text className="veremos">
                            <span>
                                <Image src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> <span className="text-img">{skills.versionControl[0].skillName}</span>
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Bases de Datos</Card.Title>
                        <hr/>
                        <Card.Text className="veremos">
                            <span>
                                <Image src={skills.database[0].imgSrc} alt={skills.database[0].imgAltText} rounded className="image-style m-1"></Image> <span className="text-img">{skills.database[0].skillName }</span>
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Plataformas de Hosting</Card.Title>
                        <hr/>
                        <Card.Text className="veremos" >
                            <span>
                                <Image src={skills.hostingPlatforms[0].imgSrc} alt={skills.hostingPlatforms[0].imgAltText} rounded className="image-style m-1"></Image> <span className="text-img">{skills.hostingPlatforms[0].skillName}</span>
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Backend</Card.Title>
                        <hr/>
                        <Card.Text className="veremos">
                           {skills.backend.map((skill, index) =>(
                            <span key = {index}>
                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image><span className="text-img"> {skill.skillName}</span>
                                
                            </span>
                            ))} 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Frameworks</Card.Title>
                        <hr/>
                        <Card.Text className="veremos">
                            {skills.frameworks.map((skill, index) =>(
                                <span key = {index}>
                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> <span className="text-img">{skill.skillName}</span>
                                
                                </span>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Front End</Card.Title>
                        <hr/>
                        <Card.Text className="veremos">
                            {skills.frontend.map((skill, index) =>(
                                <span key = {index}>
                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image><span className="text-img"> {skill.skillName}</span>
                                
                                </span>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </PageWrapper>
    )


}

export default Tools;