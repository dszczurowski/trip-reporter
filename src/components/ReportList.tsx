import React from 'react';
import styled from 'styled-components';
import ReportPreview from './ReportPreview';
import { ReportListType } from "../types";
import { useHistory} from 'react-router-dom';

const NoReportsInfo = styled.div`
	margin: 1rem 0;
`;

const ReportList: React.FC<ReportListType> = ({ reports, handleDeleteClick }) => {
	const history = useHistory();
	const onReportClick = (id: number) => {
		history.push(`/report/${id}`);
	};

	return (
		<div>
			{reports.length ?
				reports.map((report, idx) =>
					<ReportPreview 
						key={idx}
						data={report}
						handleDeleteClick={handleDeleteClick}
						handleReportClick={() => onReportClick(report.id)}
				/>)
				: <NoReportsInfo>No reports. In order to add report, click <em>New/Edit Report</em>.</NoReportsInfo>}
		</div>
	);
};

export default ReportList;
