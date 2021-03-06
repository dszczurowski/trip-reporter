import React, { useEffect, useState } from 'react';
import { getReportsFromStorage, removeReportFromStorage } from '../utils/localStorage';
import ReportList from '../components/ReportList';
import { useDebouncedCallback } from 'use-debounce';
import { ReportType } from '../types';
import styled from 'styled-components';

const SearchBar = styled.input`
  border:1px solid #cfcfcf;
  height: 2rem;
  width: 30vw;
  padding: 0 .5rem;
  line-height: 1;
  outline: 0;
  font-size: .8rem;
`;

const ReportListWithSearch: React.FC = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState(null);

  const onDeleteClick = (id: number) => {
    removeReportFromStorage(id);
    setReports(reports.filter(report => report.id !== id));
  };

  useEffect(() => {
    setReports(getReportsFromStorage());
  }, []);

  const [debouncedCallback] = useDebouncedCallback(
    (value: string) => {
      if (value) {
        setFilteredReports(reports.filter((report: ReportType) =>
          [report.tripDescription, report.country.label].some(label => label.toLowerCase().includes(value))
        ));
      } else {
        setFilteredReports(null);
      }
    },
    800
  );

  return (
    <React.Fragment>
      <SearchBar 
        type="search"
        placeholder="Search reports..."
        onChange={e => debouncedCallback(e.target.value)}
      />
      <ReportList reports={filteredReports || reports} handleDeleteClick={onDeleteClick}/>
    </React.Fragment>

  );
};

export default ReportListWithSearch;
