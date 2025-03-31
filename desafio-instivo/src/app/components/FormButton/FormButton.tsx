import { StyledButton } from "./FormButton.style";
import { ButtonProps } from "@mui/material";

interface FormButtonProps extends Omit<ButtonProps, 'type'> {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  label: string;
  "data-testid"?: string;
}

export const FormButton: React.FC<FormButtonProps> = ({ 
  onClick, 
  type = "button", 
  label,
  "data-testid": dataTestId,
  ...props 
}) => (
  <StyledButton 
    variant="contained" 
    type={type} 
    onClick={onClick} 
    fullWidth
    data-testid={dataTestId || `button-${label.toLowerCase()}`}
    {...props}
  >
    {label}
  </StyledButton>
);