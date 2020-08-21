import React from 'react';
import styled from 'styled-components';

const FormField = styled.div`
  margin: 2rem 0;
  width: 50vw;
  & * {
    font-size: 1rem;  
  }
`;

const FormFieldWrapper: React.FC = (props) => {
  return (
    <FormField>
      {props.children}
    </FormField>
  );
};

export default FormFieldWrapper;
