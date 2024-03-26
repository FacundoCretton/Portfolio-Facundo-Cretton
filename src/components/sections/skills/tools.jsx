import React from "react";
import { PageWrapper } from "../sectionsStyles";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { skills } from "./db-skills";
import "./tools.css";

const Tools = () =>{

    return(
        
        <PageWrapper>
            <h2>Herramientas </h2>

            <p>En esta sección podrás ver las herramientas que utilizo para desarrollar mis proyectos.</p>
            <div className="cards-container">
            
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Control de versiones</Card.Title>
                        <hr/>
                        <Card.Text>
                            <div className="veremos">
                                {skills.versionControl.map((skill, index) => (
                                <div className="skills-container" key={index}>
                                    <div className="image-container">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                    </div>
                                        <span>{skill.skillName}</span>
                                </div>
                                ))}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Bases de Datos</Card.Title>
                        <hr/>
                        <Card.Text>
                            <div className="veremos">
                                {skills.database.map((skill, index) => (
                                <div className="skills-container" key={index}>
                                    <div className="image-container">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                    </div>
                                        <span>{skill.skillName}</span>
                                </div>
                                ))}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Plataformas de Hosting</Card.Title>
                        <hr/>
                        <Card.Text>
                            <div className="veremos">
                                {skills.hostingPlatforms.map((skill, index) => (
                                <div className="skills-container" key={index}>
                                    <div className="image-container">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                    </div>
                                        <span>{skill.skillName}</span>
                                </div>
                                ))}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Backend</Card.Title>
                        <hr/>
                        <Card.Text>
                            <div className="veremos">
                                {skills.backend.map((skill, index) => (
                                <div className="skills-container" key={index}>
                                    <div className="image-container">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                    </div>
                                        <span>{skill.skillName}</span>
                                </div>
                                ))}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Frameworks</Card.Title>
                        <hr/>
                        <Card.Text>
                            <div className="veremos">
                                {skills.frameworks.map((skill, index) => (
                                <div className="skills-container" key={index}>
                                    <div className="image-container">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                    </div>
                                        <span>{skill.skillName}</span>
                                </div>
                                ))}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bgd-card">
                    <Card.Body>
                        <Card.Title className="card-title">Front End</Card.Title>
                        <hr/>
                        <Card.Text>
                            <div className="veremos">
                                {skills.frontend.map((skill, index) => (
                                <div className="skills-container" key={index}>
                                    <div className="image-container">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                    </div>
                                        <span>{skill.skillName}</span>
                                </div>
                                ))}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


            
        </PageWrapper>
    )


}

export default Tools;