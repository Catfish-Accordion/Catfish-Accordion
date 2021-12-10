import React from 'react';
import Profile from '../../Components/Profile';
import { profileData } from '../../Data/profileData';
import { Link } from 'react-router-dom';
//this component will contani logic for getting the data to diaply all available profiles
//for now using profilesData

function Profiles(props) {
	return (
		<div>
			{profileData.map((profile) => (
				<Profile
					key={profile.userId}
					firstName={profile.firstName}
					lastName={profile.lastName}
					name={profile.name}
					age={profile.age}
					birthday={profile.birthday}
					version={profile.version}
					username={profile.username}
					userId={profile.userId}
					anonymousId={profile.anonymousId}
					createdAt={profile.createdAt}
					updatedAt={profile.updatedAt}
				/>
			))}
            <Link to='/createProfile'>Create new profile</Link>
		</div>
	);
}

export default Profiles;
