import React, { useEffect, useState } from 'react';
import useFetchCountries from '../hooks/useFetchCountries';
import { addReportToStorage, editReportFromStorage, getSingleReportFromStorage} from '../utils/localStorage';
import { useHistory, useParams } from 'react-router-dom';
import MonthPicker from '../components/form/MonthPicker';
import RadioBox from '../components/form/RadioBox';
import NumberField from '../components/form/NumberField';
import TextArea from '../components/form/Textarea';
import SelectBox from '../components/form/SelectBox';
import CheckboxBoxGroup from '../components/form/CheckboxGroup';
import Button from '../components/Button';
import { SelectBoxValue } from "../types";

const friendsList = ['Samantha', 'Claire', 'Tom'];
const emptyReport = {
  country: { value: "POL", label: "Poland" },
  tripStartDate: "",
  tripDuration: "",
  tripDescription: "",
  friendsList: [],
  tripDestination: ""
};

const ReportDetails: React.FC = () => {
  const history = useHistory();
  const { id } = useParams();
  const countries = useFetchCountries();
  const isAddMode = id === 'add';

  const [state, setState] = useState({ ...emptyReport, id: Date.now() });

  useEffect(() => {
    if (isAddMode) {
      setState({ ...emptyReport, id: Date.now() });
    } else {
      setState(getSingleReportFromStorage(id));
    }
  }, [id, isAddMode]);

  const handleSelectChange = (country: SelectBoxValue) => setState({ ...state, country });

  const handleCheckboxChange = (name: string, value: string[]) => setState({ ...state, [name]: value });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = evt.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = () => {
    if (isAddMode) {
      addReportToStorage([state]);
    } else {
      editReportFromStorage(state)
    }
    history.push('/');
  };

  return (
    <React.Fragment>
      <SelectBox 
        options={countries}
        name="country"
        value={state.country}
        title="Visited country:"
        placeholder="Select Country..."
        onChangeInput={handleSelectChange}
      />
      <MonthPicker 
        id="trip-start"
        name="tripStartDate"
        title="Start of the trip:"
        value={state.tripStartDate}
        onChangeInput={handleChange}
      />
      <NumberField 
        id="trip-duration"
        name="tripDuration"
        value={state.tripDuration}
        label="Trip duration (days):"
        onChangeInput={handleChange}
      />
      <TextArea 
        id="trip-description"
        name="tripDescription"
        title="Trip description:"
        value={state.tripDescription}
        onChangeInput={handleChange}
      />
      <CheckboxBoxGroup 
        ids={friendsList}
        name="friendsList"
        title="Travel companions:"
        checkedValues={state.friendsList}
        onChangeCheckbox={handleCheckboxChange}
      />
      <RadioBox 
        ids={['Destination', 'Transit']}
        name="tripDestination"
        title="Was the country a destination or a transit?"
        value={state.tripDestination}
        onChangeInput={handleChange}
      />

      <Button 
        onClick={handleSubmit}
        variant="submit"
        label={`${isAddMode ? 'Add': 'Edit'} report`}
      />

    </React.Fragment>
  );
};

export default ReportDetails;
