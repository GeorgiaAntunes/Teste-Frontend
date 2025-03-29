import { Button } from "@mui/material";

interface FormButtonProps {
  onClick?: () => void;
  type?: "button" | "submit";
  label: string;
}

export const FormButton: React.FC<FormButtonProps> = ({ onClick, type = "button", label }) => (
  <Button variant="contained" type={type} onClick={onClick} fullWidth>
    {label}
  </Button>
);
