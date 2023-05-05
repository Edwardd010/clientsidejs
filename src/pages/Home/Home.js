import React, {useContext, useEffect} from "react";
import './Home.css'
import Button from "../../components/Button/Button";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

function Home(){

    const {logoutFunction, loginStatus} = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!loginStatus) {
            navigate("/");
        }
    }, [loginStatus, navigate]);

    return(
        <>
            <h1>Homepage!</h1>

            <Button
                bType={"submit"}
                bClick={logoutFunction}
                bText={"Logout"}
            />
        </>
    )
}

export default Home;