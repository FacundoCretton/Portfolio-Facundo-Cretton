import styled from "styled-components";


export const PageWrapper = styled.section`

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 250px;
    margin-top: 50px;

    h2 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    color: #333;
    text-align: center;
  };

  p {
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 18px;
    color: #333;
    text-align: center;
    padding: 0 20px;
  };
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