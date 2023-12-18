import styled from "styled-components";


export const PageWrapper = styled.section`

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 250px;
    margin-top: 50px;

    h1{
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 20px;
    }
    p{
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        margin:50px auto;


    }


`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 20px;
    
    @media (max-width: 490px) {
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        padding: 0px;


    }

`;