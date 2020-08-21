import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';
import FormFieldWrapper from './FormFieldWrapper';

const MonthPickerInput = styled.input`
  margin-left: .5rem;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: .8rem;
`;

const MonthPicker: React.FC<FormInputType> = ({ id, name, title, value, error, onChangeInput }) => {
  return (
    <FormFieldWrapper>
      <label htmlFor={id}><em>{title}</em></label>
      <MonthPickerInput type="month" id={id} name={name} value={value} onChange={onChangeInput} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormFieldWrapper>
  );
};

export default MonthPicker;
