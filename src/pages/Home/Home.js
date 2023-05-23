import React, {useContext, useEffect} from "react";
import './Home.css'
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import homebutton from "../../assets/add.png"
import WorkoutCards from "../../components/WorkoutCards/WorkoutCards";

function Home(){

    return(
        <>
            <div className="home-toolbar">
                <h4 className="home-edit">Edit</h4>
                <h1 className="home-logo">Home</h1>
                <Link to="/add-workout">
                    <img className="home-add-workout" src={homebutton} alt="Add button"/>
                </Link>
            </div>
            <main>
                <WorkoutCards/>
            </main>
            <Footer/>
        </>
    )
}

export default Home;