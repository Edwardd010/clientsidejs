import React, {useEffect, useState} from "react";
import './Register.css'
import Input from "../../components/Input/Input";
import {Link} from "react-router-dom";
import axios from "axios";
import d from "../../assets/d.png";
import Button from "../../components/Button/Button";

function Register(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

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
            } catch (error) {
                console.error('Error creating new user: ', error);
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
                    {!passwordsMatch && (
                        <h3>Passwords don't match</h3>
                    )}
                </div>
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