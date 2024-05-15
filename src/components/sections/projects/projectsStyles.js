import styled from "styled-components";
import { Accordion, Card } from "react-bootstrap";


export const CardsStyle = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    padding: 0 30px;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    gap: 20px;
`;

export const ButtonContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`;



export const CardTitle = styled(Card.Title)`
    font-family: "Poppins";
`;


export const CardText = styled(Card.Text)`
    font-family: "Open Sans";


`;

export const CardBody = styled(Card.Body)`
    /* background: red; */

`;

export const AccordionBody = styled(Accordion.Body)`

  background: #ffffcc;

`;

export const AccordionItem = styled(Accordion.Item)`
    background: #ffffcc;

     /* .accordion-item{
        background: red;
    } */
    
     .accordion-button.collapsed {
        /* border: 1px solid #b0c4de; */
    }


    .accordion-button{
        background: #ffffcc;
        /* border: 1px solid #b0c4de; */
        box-shadow: none;

        :first-child{
            margin-bottom: 10px;
        }
    }

`;