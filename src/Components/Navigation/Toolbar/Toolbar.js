import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import Welcome from '../../Welcome';

const Toolbar = (props) => {
	return (
		<header className="App-header">
			<p>
				Catfish Accordion -- <code>PTIGA</code>
			</p>
			<a
				className="App-link"
				href="https://app.segment.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Segment
			</a>
			<Welcome name={'Liz'} date={props.date} />
			<nav className={classes.Toolbar}>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default Toolbar;
