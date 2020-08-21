import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReportPreview from './ReportPreview';
import { ReportListType } from "../types";
import { useHistory } from 'react-router-dom';
import Button from './Button';

const NoReportsInfo = styled.div`
  margin: 1rem 0;
`;

const ReportsBadge = styled.div`
  position: relative;
  margin: 1rem 0;
  width: 80px;

  span {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    padding: 2px;
    font-size: 12px;
    background-color: green;
    color: white;
    border-radius: 50%;
  }
`;

const ReportList: React.FC<ReportListType> = ({ reports, handleDeleteClick }) => {
  const history = useHistory();
  const [partialReports, setPartialReports] = useState([]);

  useEffect(() => {
    setPartialReports(reports.slice(0, 10));
  }, [reports])

  const onReportClick = (id: number) => {
    history.push(`/report/${id}`);
  };

  const onLoadMoreClick = () => {
    const lastReportIndex = reports.findIndex(report => report.id === partialReports[partialReports.length - 1].id)
    const nextReportsPart = reports.slice(lastReportIndex + 1, lastReportIndex + 10);
    setPartialReports(partialReports.concat(nextReportsPart));
  }

  const renderLoadMoreBtn = () => 
    <Button
      label='Load more'
      onClick={() => onLoadMoreClick()}
      variant='submit'
    />

  return (
    <div>
      <ReportsBadge>Reports <span>{partialReports.length}</span></ReportsBadge>
      {partialReports.length ?
        partialReports.map((report, idx) =>
          <ReportPreview 
            key={idx}
            data={report}
            handleDeleteClick={handleDeleteClick}
            handleReportClick={() => onReportClick(report.id)}
        />)
        : <NoReportsInfo>No reports. In order to add report, click <em>New/Edit Report</em>.</NoReportsInfo>}
      {reports.length > 10
        && reports.length !== partialReports.length
        && renderLoadMoreBtn()}
    </div>
  );
};

export default ReportList;
