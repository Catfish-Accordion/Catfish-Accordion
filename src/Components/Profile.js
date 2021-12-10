// EXTERNAL IMPORTS
// bring in React from React
import React from 'react';


// define our functional component
function Profile({
	firstName,
	lastName,
	name,
	age,
	birthday,
	version,
	username,
	userId,
	anonymousId,
	createdAt,
	updatedAt,
}) {
	
	let thisYear = 2021;
	let birthYear = thisYear - age;

	return (
		<div className="profile ">
			<h1>{name}</h1>
			<p>Updated At : {updatedAt}</p>
			<h2>{username}</h2>
			<p>
				{age} : {birthday}
			</p>
		</div>
	);
}

export default Profile;
