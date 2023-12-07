import { StyledButton, StyledIcon } from "./buttonStyles";

const Button = ({ href, download, children, icon, ...rest }) => {
    return (
      <StyledButton href={href} download={download} {...rest}>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        {children}
      </StyledButton>
    );
  };
  
  export default Button;