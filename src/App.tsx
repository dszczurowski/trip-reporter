import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReportDetails from "./containers/ReportDetails";
import ReportListWithSearch from "./containers/ReportListWithSearch";
import Navigation from "./components/Navigation";
import styled from 'styled-components';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  padding-left: 1rem;
`;

const App: React.FC = () => {
  return (
      <Router>
        <Navigation/>
        <Main>
          <Switch>
            <Route path="/report/:id">
              <ReportDetails />
            </Route>
            <Route path="/">
              <ReportListWithSearch />
            </Route>
          </Switch>
        </Main>
      </Router>
  );
}

export default App;
