"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: "Poppins", sans-serif;
    background-color: #111;
    color: #eee;
  }

  #root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input, select, textarea, button {
    font-family: inherit;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;
    max-width: 500px;
  }

  .form-group label {
    color: #eee;
    font-weight: 500;
  }

  .form-group input, 
  .form-group select {
    padding: 12px;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #444;
    color: #eee;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .form-group input::placeholder {
    color: #999;
  }

  .form-group .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }

  .form-group .error-message {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
    margin-top: 8px;
  }

  button {
    border: none;
    padding: 10px;
    border-radius: 5px;
    color: #eee;
    background-color: #49a1b8;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 500ms ease;
  }

  button:hover {
    cursor: pointer;
    background-color: #61dbfb;
  }

  @media (max-width: 600px) {
    .form-group {
      width: 90%;
    }

    button {
      font-size: 0.9rem;
      padding: 8px;
    }
  }
`;
