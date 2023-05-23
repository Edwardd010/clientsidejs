import React, {useContext, useEffect, useState} from "react";
import './Register.css'
import Input from "../../components/Input/Input";
import {Link} from "react-router-dom";
import axios from "axios";
import d from "../../assets/d.png";
import Button from "../../components/Button/Button";
import {AuthContext} from "../../context/AuthContext";

function Register(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [userCreated, setUserCreated] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [createError, setCreateError] = useState(null);


    function validatePassword() {
        if (password === repeatPassword) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setPasswordsMatch(validatePassword());
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [repeatPassword]);

    const handleRegister = async (e) => {
        e.preventDefault()

        if(validatePassword()){
            try{
                const response = await axios.post('http://localhost:1234/users', {
                    username: username,
                    password: password
                });
                console.log('User created: ', response.data);
                setUserCreated(true);
                setUsernameError(false);

            } catch (error) {
                console.error('Error creating new user: ', error.response);
                setCreateError(error.response.data);
                setUsernameError(true);
            }
        } else {
            setRepeatPassword("");
        }
    }

    return(
        <>
            <div className="register-container">
                <h1 className="register-title">Ed's App</h1>
                <img className="register-logo" src={d} alt="Register logo"/>
                <div className="register-fields">
                    <h3 className="register-d">username:</h3>
                    <Input iType={"text"} iValue={username} iChange={(e) => setUsername(e.target.value)}/>
                    <h3 className="register-d">password:</h3>
                    <Input iType={"password"} iValue={password} iChange={(e) => setPassword(e.target.value)}/>
                    <h3 className="register-d">repeat password:</h3>
                    <Input iType={"password"} iValue={repeatPassword} iChange={(e) => setRepeatPassword(e.target.value)}/>
                </div>
                {!passwordsMatch && (
                    <h3 className="register-msg">Passwords don't match</h3>
                )}
                {userCreated && (
                    <h3 className="register-msg">User {username} created successfully!</h3>
                )}
                {usernameError && (
                    <h3 className="register-msg">{createError}!</h3>
                )}
                <div className="register-button">
                    <Button
                        bType={"submit"}
                        bText={"OK"}
                        bClick={handleRegister}
                    />
                </div>
                <Link to={"/"}  className="register-back"><h3>Back</h3></Link>
            </div>
        </>
    )
}

export default Register;