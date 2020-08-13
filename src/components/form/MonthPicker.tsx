import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';
import FormFieldWrapper from './FormFieldWrapper';

const MonthPickerInput = styled.input`
  margin-left: .5rem;
`;

const MonthPicker: React.FC<FormInputType> = ({ id, name, title, value, onChangeInput }) => {
  return (
    <FormFieldWrapper>
      <label htmlFor={id}><em>{title}</em></label>
      <MonthPickerInput type="month" id={id} name={name} value={value} onChange={onChangeInput} />
    </FormFieldWrapper>
  );
};

export default MonthPicker;
