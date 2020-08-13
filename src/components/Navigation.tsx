import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100vw;
  margin-bottom: 1rem;
  line-height: 2rem;
  background-color: #f3f3f3;
`;

const NavList = styled.ul`
  display: inline-flex;
  list-style-type: none;
  margin: 0;
  padding: .5rem;
  overflow: hidden;
  background-color: #f3f3f3;
`;

const NavListItem = styled.li`
  & a {
    color: #666;
    text-align: center;
    padding: 1rem;
    text-decoration: none;
  }
  
  & a:hover:not(.active) {
    background-color: #ddd;
  }
`;

const Navigation: React.FC = () => {
  const isReportEditionActive = (match, location) => location.pathname.includes('report');

  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink 
            to="/"
            exact
            activeStyle={{
              color: "black",
              fontWeight: "bold"
            }}
          >
            Reports
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink 
            to="/report/add"
            activeStyle={{
              color: "black",
              fontWeight: "bold"
            }}
            isActive={isReportEditionActive}
          >
            New/Edit Report
          </NavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
