import React from "react";

interface SelectBoxValue {
	value: string,
	label: string
}

export interface ReportType {
	country: SelectBoxValue,
	tripDuration: string,
	tripStartDate: string,
	tripDescription: string,
	friendsList: string[],
	tripDestination: string,
	id: number,
	handleDeleteClick?: (id: number) => void,
	handleReportClick?: () => void
}

export interface ReportTypeProps {
	data: ReportType
	handleDeleteClick: (id: number) => void,
	handleReportClick: () => void
}

export interface ReportListType {
	reports: Array<ReportType>
	handleDeleteClick: (id: number) => void
}

export interface FormInputType {
	value?: string,
	checkedValues?: string[];
	onChangeInput?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
	onChangeCheckbox?: (name: string, value: string[]) => void,
	label?: string,
	id?: string,
	ids?: string[],
	name: string,
	title?: string,
	error?: string,
	options?: SelectBoxValue
}

export interface SelectBoxType {
	value: SelectBoxValue,
	onChangeInput: (SelectBoxValue) => void,
	name: string,
	title: string,
	placeholder?: string,
	options: Array<SelectBoxValue>
}

export interface ButtonType {
	onClick: (e: React.MouseEvent) => void,
	label?: string,
	disabled?: boolean,
	variant?: string
}