import React from 'react';
import styled from 'styled-components';
import { SelectBoxType } from '../../types';
import Select from 'react-select';
import FormFieldWrapper from './FormFieldWrapper';

const SelectBoxLabel= styled.label`
	display: flex;
	margin-bottom: .5rem;
`;

const SelectBox: React.FC<SelectBoxType> = ({ name, options, title, value, onChangeInput }) => {
	return (
		<FormFieldWrapper>
			<SelectBoxLabel><em>{title}</em></SelectBoxLabel>
			<Select 
				name={name}
				options={options}
				title="Visisted country:"
				placeholder="Select Country..."
				value={value}
				onChange={onChangeInput}
			/>
		</FormFieldWrapper>
	);
};

export default SelectBox;
