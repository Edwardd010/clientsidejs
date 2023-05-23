import React, {useContext, useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";
import './Profile.css';
import userService from "../../services/userService";
import Input from "../../components/Input/Input";


function Profile(){

    const [user, setUser ] = useState('');
    const [bodyweight, setBodyweight] = useState({weight: 0});

    useEffect(()=> {
        userService.getUser()
            .then(data => {
                setUser(data.username);
            })
            .catch(error => {
                console.error('Error getting user:', error);
            })
    }, [])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBodyweight(prevBodyweight => ({
            ...prevBodyweight,
            [name]: value
        }));
    };

    const convertToLbs = (kg) => {
        const lbs = kg * 2.20462;
        return lbs.toFixed(1);
    };

    return (
        <>
            <h1 className="profile-header">Profile</h1>
            <div className="profile-container">
                <div  className="profile-user">
                    <h2>{user}</h2>
                </div>
                <h3>Current bodyweight:</h3>
                <Input
                    iClassName="profile-bw"
                    iName="weight"
                    iType="number"
                    iValue={bodyweight.weight}
                    iChange={handleInputChange}
                />
                <div className="bw-text">
                    <h3 className="bw-result">{bodyweight.weight} kg</h3>
                    <h3 className="bw-result">{convertToLbs(bodyweight.weight)} lbs</h3>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Profile;