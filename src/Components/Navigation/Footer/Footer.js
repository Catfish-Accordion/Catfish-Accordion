import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
	return (
		<div className={classes.Footer}>
			<span>
				Developed with{' '}
				<svg
					width='14'
					height='11'
					viewBox='0 0 14 11'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M6.53148 1.82839L6.99979 2.41321L7.46814 1.82843C8.0561 1.0943 9.01997 0.6 10.1287 0.6C11.9902 0.6 13.4 1.96003 13.4 3.52C13.4 4.12133 13.0625 4.85811 12.4309 5.67798C11.8119 6.48152 10.9732 7.28449 10.1142 8.00517C9.25854 8.72316 8.40016 9.3451 7.75416 9.7883C7.44199 10.0025 7.18057 10.1741 6.99453 10.2939C6.80904 10.1782 6.54924 10.0127 6.23931 9.80571C5.59415 9.37487 4.73698 8.76789 3.8826 8.06037C3.02503 7.3502 2.18813 6.55331 1.57052 5.74481C0.94288 4.92317 0.6 4.16505 0.6 3.51997C0.6 2.46673 0.969667 1.76543 1.51553 1.31544C2.07851 0.851346 2.89664 0.6 3.87088 0.6C4.97997 0.6 5.94363 1.0943 6.53148 1.82839Z'
						stroke='#FFBAC5'
						strokeWidth='1.2'
					/>
				</svg>{' '}
			</span>
			<span>&#169; 2021, All rights reserved.</span>
		</div>
	);
};

export default Footer;
