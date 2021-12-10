// EXTERNAL IMPORTS
// bring in React from React
import React, {useState} from 'react';
// INTERNAL IMPORTS
import '../Styles/Profile.css';
import Profile from "./Profile";
// import ProfileData from "../Data/profileData"


let createdAt = Date.now()
let updatedAt = Date.now()
let today = Date.now()


let userId = () => {Math.floor(Math.random()* 10000000)}
let anonymousIdGen = () => [Math.floor(Math.random()* 10000),Math.floor(Math.random()* 10000),Math.floor(Math.random()* 10000),Math.floor(Math.random()* 10000)]
let anonymousId = () => `${anonymousIdGen[0]}-${anonymousIdGen[1]}-${anonymousIdGen[2]}-${anonymousIdGen[3]}`
let profileVersion = 0
let firstName, lastName, name, age, birthday, version, pd, username
class UserProfile {
    constructor() {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = `${firstName} ${lastName}`;
    this.age = age;
    this.birthday = birthday;
    this.version = version;
    this.username = username;
    this.userId = `${userId}_${profileVersion}`;
    this.anonymousId = anonymousId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    }   
}

const Liz = new UserProfile("Liz", "Kane", "Liz Kane", 30, "02/22/1991", profileVersion, "Lizay Kay", `${(userId())}_${profileVersion}`, anonymousId(), createdAt, updatedAt)
const Olesia = new UserProfile("Olesia", "Guidi", "Olesia Guidi", 27, "04/12/1994", profileVersion, "Oli Oxen Free", `${userId()}_${profileVersion}`, anonymousId(), createdAt, updatedAt)
const Robben = new UserProfile("Robben", "Weems", "Robben Weems", 28, "03/18/1993", profileVersion, "Robben U Blind", `${userId()}_${profileVersion}`, anonymousId(), createdAt, updatedAt)
const Esteban = new UserProfile("Esteban", "Gonzalez Corti", "Esteban Gonzalez Corti", 30, "05/26/1991", profileVersion, "Este Speedy Gonzalez", `${userId()}_${profileVersion}`, anonymousId(), createdAt, updatedAt)
const James = new UserProfile("James", "Reynolds", "James Reynolds", 31, "06/14/1990", profileVersion, "Ja Ich James", `${userId()}_${profileVersion}`, anonymousId(), createdAt, updatedAt)
const Dery = new UserProfile("Dery", "Aldeano Solorin", "Dery Aldeano Solorin", 28, "01/14/1993", profileVersion, "Truth or Der", `${userId()}_${profileVersion}`, anonymousId(), createdAt, updatedAt)

let profileData = {Liz, Olesia, Robben, Esteban, James, Dery}


// define our functional component
function ProfileList (props) {
    
    pd = profileData
    let thisYear = 2021
    // let birthYear = thisYear-pd.age

    // changeShowAll = () => {
    //     if (this.state.showAll === true){
    //         this.setState({
    //             showAll: false
    //         })
    //     } else {
    //         this.setState({
    //             showAll: true
    //         })
    //     }
    // }
    return (
        
        <div>
            <Profile profileData={Liz} thisYear={thisYear}/>
            <Profile profileData={Olesia} thisYear={thisYear}/> 
            <Profile profileData={Robben} thisYear={thisYear}/> 
            <Profile profileData={Esteban} thisYear={thisYear}/> 
            <Profile profileData={James} thisYear={thisYear}/> 
            <Profile profileData={Dery} thisYear={thisYear}/> 
        </div>
    )
}

export default ProfileList;