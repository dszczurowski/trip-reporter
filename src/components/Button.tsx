import React from 'react';
import styled from 'styled-components';
import { ButtonType } from '../types';

const ButtonElem = styled.button<ButtonType>`
  background-color: ${props => props.variant === 'submit' ? "#4CAF50" : "#D10808"}
  color: white; 
  border: none;
  padding: .5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: .5rem;
  transition-duration: 0.4s;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    opacity: .5;
  }
`;

const Button: React.FC<ButtonType> = ({ label, variant, onClick }) => {
  return (
    <ButtonElem variant={variant} onClick={onClick}>{label}</ButtonElem>
  );
};

export default Button;
