import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';


const NavigationItems = (props) => {
	return (
		<ul className={classes.NavigationList}>
			<NavigationItem link='#'>Link</NavigationItem>
		</ul>
	);
};

export default NavigationItems;
