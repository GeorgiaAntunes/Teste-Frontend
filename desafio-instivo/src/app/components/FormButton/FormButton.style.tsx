"use client";
import { styled } from "@mui/material/styles";

export const StyledButton = styled("button")`
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: #693382;
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
  margin-top: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 500ms ease;

  &:hover {
    cursor: pointer;
    background-color:rgb(13, 23, 25);
  }
`;