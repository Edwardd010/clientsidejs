import React from "react";
import './Footer.css';
import home from "../../assets/home.png";
import profile from "../../assets/profile.png";
import workouts from "../../assets/workouts.png";
import {Link} from "react-router-dom";

function Footer(){

    return(
        <>
            <div className="footer-container">
                <Link to="/home" className="footer-nav">
                    <img className="footer-logo" src={home} alt="Home logo"/>
                    <h4>Home</h4>
                </Link>
                <Link to="/workout" className="footer-nav">
                    <img className="footer-logo" src={workouts} alt="Workouts logo"/>
                    <h4>Workouts</h4>
                </Link>
                <Link to="/profile" className="footer-nav">
                    <img className="footer-logo" src={profile} alt="Profile logo"/>
                    <h4>Profile</h4>
                </Link>
            </div>
        </>
    )
}
export default Footer;