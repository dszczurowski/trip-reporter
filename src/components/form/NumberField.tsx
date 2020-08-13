import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';
import FormFieldWrapper from './FormFieldWrapper';

const NumberInput = styled.input`
  margin-left: .5rem;
  font-size: .8rem;
`;

const NumberField: React.FC<FormInputType> = ({ id, name, value, label, onChangeInput }) => {
  return (
    <FormFieldWrapper>
      <label htmlFor={id}><em>{label}</em></label>
      <NumberInput type="number" id={id} name={name} value={value} onChange={onChangeInput} />
    </FormFieldWrapper>
  );
};

export default NumberField;
