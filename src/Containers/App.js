// EXTERNAL IMPORTS
// import '../Styles/App.css';
// bring in React from React
import React from 'react';
import { Routes, Redirect, Route } from 'react-router-dom';

// INTERNAL IMPORTS
import Welcome from '../Components/Welcome';
import Profiles from './Profiles/Profiles';
import ProfileForm from './ProfileForm';
import Layout from './hoc/Layout/Layout';

// define our functional component
function App(props) {
	// define routes - we will show only Profiles component for now
	let routes = (
		<Routes>
			<Route path="/" exact element={<Profiles />} />
			<Route path="/createProfile" element={<ProfileForm />} />
			{/* <Redirect to='/' /> */}
		</Routes>
	);

	return (
		<div className="App">
			<Layout>{routes}</Layout>
		</div>
	);
}

export default App;
