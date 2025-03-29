import { StyledButton } from "./FormButton.style";


interface FormButtonProps {
  onClick?: () => void;
  type?: "button" | "submit";
  label: string;
}

export const FormButton: React.FC<FormButtonProps> = ({ onClick, type = "button", label }) => (
  <StyledButton variant="contained" type={type} onClick={onClick} fullWidth>
    {label}
  </StyledButton>
);
