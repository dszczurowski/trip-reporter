import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';
import FormFieldWrapper from './FormFieldWrapper';

const NumberInput = styled.input`
  margin-left: .5rem;
  font-size: .8rem;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: .8rem;
`;

const NumberField: React.FC<FormInputType> = ({ id, name, value, label, error, onChangeInput }) => {
  return (
    <FormFieldWrapper>
      <label htmlFor={id}><em>{label}</em></label>
      <NumberInput type="number" id={id} name={name} value={value} min={1} onChange={onChangeInput} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormFieldWrapper>
  );
};

export default NumberField;
