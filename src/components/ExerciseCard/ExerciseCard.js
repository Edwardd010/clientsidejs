import React, {useContext, useEffect} from "react";
import './ExerciseCard.css'
import {ExerciseContext} from "../../context/ExerciseContext";
import axios from "axios";
import * as url from "url";
import * as response from "react-dom/test-utils";
function ExerciseCard(){

    const { exerciseName, sets, reps, weight } = useContext(ExerciseContext);

    const url = 'http://localhost:3000/users/exercise/{id}'

    const dataRequest = () => {
        const fetchData = async () => {
            try {
                const response = await axios(url);
                const data = response.data;
                console.log(data);
            } catch (error) {
                console.log(error.response);
            }
        };

        // useEffect(() => {
        //     fetchData();
        // }, []);
        //
    }



    return(
        <>
            <div className="ecard-container">
                <h2 className="ecard-title">{exerciseName}</h2>
                <h3 className="ecard-object">Sets: {sets}</h3>
                <h3 className="ecard-object">Reps: {reps}</h3>
                <h3 className="ecard-object">Weight: {weight}kg</h3>
            </div>
        </>
    )
}


export default ExerciseCard;