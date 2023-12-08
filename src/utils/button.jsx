import { StyledButton, StyledIcon } from "./buttonStyles";

const Button = ({ href, download, children, icon, backgroundColor, colorText, width, ...rest }) => {
    return (
      <StyledButton href={href} download={download} backgroundColor={backgroundColor} width={width} {...rest}>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        {children}
      </StyledButton>
    );
  };
  
  export default Button;