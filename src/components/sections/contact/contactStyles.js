import styled from 'styled-components';

export const ContactWrapper = styled.div`

  margin-left: 250px;
  margin-top: 20px;
  margin-bottom: 20px;

  h2 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    color: #333;
    text-align: center;
  }

  p{
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 18px;
    color: #333;
    text-align: center;


  }
  @media (max-width: 768px) {
    margin:50px auto;


  }


`;
export const ContactFormWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  
`;

export const Form = styled.form`
  display: grid;
  grid-gap: 26px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 26px;
  border-radius: 14px;
  
`;

export const FormField = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;

  label {
    font-family: "Montserrat";
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  }

  textarea{
    height: 150px;
  }

  div {
    color: red; 
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Poppins";
`;
