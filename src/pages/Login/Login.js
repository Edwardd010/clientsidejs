import React, {useContext, useEffect, useState} from "react";
import './Login.css'
import Input from "../../components/Input/Input";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button";
import {AuthContext} from "../../context/AuthContext";
import d from "../../assets/d.png";
import axios from "axios";


function Login() {

    const authData = useContext(AuthContext);

    let [validateStatus, setValidateStatus] = useState(null);
    const {loginFunction, loginStatus} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleLogin(event) {
        event.preventDefault();

        try {

            const response = await axios.post('http://localhost:1234/login', {
                username,
                password
            });
            setValidateStatus(response.status);
        } catch (error) {
            setValidateStatus("Invalid username or password");
        }

    }
    useEffect(() => {
        if (validateStatus === 200) {
            loginFunction();
        }
    }, [validateStatus, loginFunction, navigate]);

    useEffect(() => {
        if (loginStatus) {
            navigate("/home");
        }
    }, [loginStatus, navigate, setValidateStatus]);


        return (
            <div className="login-container">
                <h1 className="login-title">Ed's App</h1>
                <img className="login-logo" src={d} alt="Login logo"/>
                <div className="login-fields">
                    <h3 className="login-d">username:</h3>
                    <Input iType={"text"} iValue={username} iChange={(e) => setUsername(e.target.value)}/>
                    <h3 className="login-d">password:</h3>
                    <Input iType={"password"} iValue={password} iChange={(e) => setPassword(e.target.value)}/>
                    <h3 className="f-login">Forgot password?</h3>
                </div>
                <div className="login-button">
                    <Button
                        bType={"submit"}
                        bText={"Login"}
                        bClick={handleLogin}
                    />
                </div>
                <Link to={"/register"} className="login-register"><h3>Register</h3></Link>
            </div>
        )
    }


export default Login;