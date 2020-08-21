import React from 'react';
import styled from 'styled-components';
import { ReportTypeProps } from '../types';
import Button from './Button';

const Article = styled.article`
  position: relative;
  width: 90vw;
  background-color: white;
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: .5px .1px 10px -1px #ccc;
  border-left: 4px solid gray;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.005);
    border-color: green;
    transition: .5s;
  }
`;

const TripInfo = styled.span`
  font-weight: normal;
`;

const TripStartDate = styled.p`
  color: gray;
  font-size: .8rem;
`;

const RightTopCornerElement = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  
  ${Article}:hover & {
    display: block;
  }
`;

const ReportPreview: React.FC<ReportTypeProps> = ({ data, handleDeleteClick, handleReportClick }) => {
  const { country, tripDescription, tripDestination, tripDuration, tripStartDate, friendsList, id } = data;

  const renderTripDuration = () => `(duration: ${tripDuration} day${tripDuration === '1' ? '' : 's'})`;

  const onDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleDeleteClick(id);
  };

  return (
    <React.Fragment>
      <Article onClick={handleReportClick}>
        <TripStartDate>
          {tripStartDate} {tripDuration ? <TripInfo>{renderTripDuration()}</TripInfo> : ''}
        </TripStartDate>
        <h3>
          {country.label} {tripDestination ? <TripInfo>({tripDestination})</TripInfo> : ''}
        </h3>
        <p>
          {tripDescription}
        </p>
        <p>
          Travel companions: {friendsList.length ? friendsList.join(', ') : 'no one'}
        </p>
        <RightTopCornerElement>
          <Button 
            onClick={onDeleteClick}
            variant="cancel"
            label="X"
          />
        </RightTopCornerElement>
      </Article>
    </React.Fragment>
  );
};

export default React.memo(ReportPreview, (prevProps, nextProps) => prevProps.data === nextProps.data);
