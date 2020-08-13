import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';
import FormFieldWrapper from './FormFieldWrapper';

const TextAreaLabel= styled.label`
  display: flex;
  margin-bottom: .5rem;
`;

const TextAreaField = styled.textarea`
  resize: none;
  padding: .5rem;
`;

const TextArea: React.FC<FormInputType> = ({ id, name, title, value, onChangeInput }) => {
  return (
    <FormFieldWrapper>
      <TextAreaLabel htmlFor={id}><em>{title}</em></TextAreaLabel>
      <TextAreaField id={id} name={name} rows={10} cols={50} value={value} onChange={onChangeInput} />
    </FormFieldWrapper>
  );
};

export default TextArea;
