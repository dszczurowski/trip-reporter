import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';
import FormFieldWrapper from './FormFieldWrapper';

const RadioInputLabel = styled.label`
  display: block;
  margin: .5rem 0;
`;

const RadioBox: React.FC<FormInputType> = ({ ids, name, title, value, onChangeInput }) => {
  return (
    <FormFieldWrapper>
      <em>{title}</em>
      {ids && ids.map(id => (
        <RadioInputLabel key={id} htmlFor={id}>
          <input 
            type="radio"
            id={id}
            name={name}
            value={id}
            checked={value.includes(id)}
            onChange={onChangeInput}
          />
          {id}
        </RadioInputLabel>
      ))}
    </FormFieldWrapper>
  );
};

export default RadioBox;
