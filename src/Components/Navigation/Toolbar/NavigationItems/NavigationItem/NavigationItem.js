import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';


const NavigationItem = React.memo((props) => {
	let finalAddress = null;
	const link = props.link;

		finalAddress = (
			<NavLink
				to={`${link}`}
				exact={props.exact}
				activeClassName={classes.Selected}>
				{props.children}
			</NavLink>
		);


	return <li className={classes.NavigationItem}>{finalAddress}</li>;
});

export default NavigationItem;
