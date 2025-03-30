"use client";
import { styled } from "@mui/material/styles";

export const StyledButton = styled("button")`
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: ${(p) => p.theme.palette.white};
  background-color: ${(p) => p.theme.palette.purple};
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
  margin-top: 10px;
  transition: all 500ms ease;

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.palette.background.default};
  }
`;
