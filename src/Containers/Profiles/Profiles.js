import React from 'react'
import Profile from '../../Components/Profile'
import { profileData } from '../../Data/profileData';

//this component will contani logic for getting the data to diaply all available profiles
function Profiles(props) {
console.log('profiles rendered')
  return (
    <div >
      {profileData.map(profile => <Profile
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
       />)}
    </div>
  );
}

export default Profiles;
