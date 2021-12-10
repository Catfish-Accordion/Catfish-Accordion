// EXTERNAL IMPORTS
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// INTERNAL IMPORTS
import './Styles/App.css';
import App from './Containers/App';
// import Profile from './Components/Profile';

ReactDOM.render(
	<BrowserRouter>
		<Suspense fallback={<div>Loading...</div>}>
			<App />
		</Suspense>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
