import React from 'react';
import {
	NavLink
} from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
	display: inline-flex;
	list-style-type: none;
`;

const NavListItem = styled.li`
	margin: .5rem 2rem;
`;

const Navigation: React.FC = () => {
	const isReportEditionActive = (match, location) => location.pathname.includes('report');

	return (
		<nav>
			<NavList>
				<NavListItem>
					<NavLink to="/"
									 exact
									 activeStyle={{
										 fontWeight: "bold",
										 color: "black"
									 }}
					>
						Reports
					</NavLink>
				</NavListItem>
				<NavListItem>
					<NavLink to="/report/add"
									 activeStyle={{
										 fontWeight: "bold",
										 color: "black"
									 }}
									 isActive={isReportEditionActive}
					>
						Report Edition
					</NavLink>
				</NavListItem>
			</NavList>
		</nav>
	);
};

export default Navigation;
