import React from 'react';
// import classes from './Layout.module.css';
import Toolbar from '../../../Components/Navigation/Toolbar/Toolbar';
import Footer from '../../../Components/Navigation/Footer/Footer';

//having Layout ensures that toolbar (header +  navigation) and footer is always on the page
// props.children is the component displaying based on the route
const Layout = (props) => {
	return (
		<div>
			{/* Toolbar component contains navigation and header */}
			<Toolbar />
			<main>{props.children}</main>
			<Footer />
		</div>
	);
};



export default Layout;
