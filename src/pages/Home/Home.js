import React, {useContext, useEffect} from "react";
import './Home.css'
import Button from "../../components/Button/Button";
import {AuthContext} from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import homebutton from "../../assets/add.png"

function Home(){

    // const {logoutFunction, loginStatus} = useContext(AuthContext);
    //
    // const navigate = useNavigate();
    //
    // useEffect(() => {
    //     if (!loginStatus) {
    //         navigate("/");
    //     }
    // }, [loginStatus, navigate]);
    // Not sure if I want to use this in my home page, I think only by my profile-page
    // <Button
    //     className="home-button"
    //     bType={"submit"}
    //     bClick={logoutFunction}
    //     bText={"Logout"}
    // />

    return(
        <>
            <div className="home-toolbar">
                <h4 className="home-edit">Edit</h4>
                <h1 className="home-logo">Home</h1>
                <Link to="/add-workout">
                    <img className="home-add-workout" src={homebutton} alt="Add button"/>
                </Link>
            </div>


            <Footer/>
        </>
    )
}

export default Home;