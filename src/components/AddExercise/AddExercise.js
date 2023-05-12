import React, {useContext, useState} from "react";
import './AddExercise.css'
import Input from "../Input/Input";
import exit from "../../assets/exit.png";
import {AuthContext} from "../../context/AuthContext";
import exerciseService from "../../services/exerciseService";



function AddExercise(){

    const {showCloseFunction, popStatus } = useContext(AuthContext);

    const [exercise, setExercise] = useState({
        exerciseName: '',
        sets: 0,
        reps: 0,
        weight: 0
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExercise(prevExercise => ({
            ...prevExercise,
            [name]: value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        exerciseService.createExercise(exercise)
            .then(data => {
                console.log('Exercise created successfully:', data);
                showCloseFunction();
                window.location.reload();
            })
            .catch(error => {
                console.error('Error creating exercise:', error);
            });
    };

    function handleExit(event){
        showCloseFunction();
    }



    return (
        <>
            <div className="add-exercise-container">
                <div className="add-header">
                    <img className="add-exercise-exit" src={exit} alt="exit" onClick={handleExit}/>
                    <h2>Add Exercise</h2>
                    <a onClick={handleSubmit}>
                        <h4>Add</h4>
                    </a>
                </div>
                <form>
                    <label>
                        Exercise Name:
                        <input type="text" name="exerciseName" value={exercise.exerciseName} onChange={handleInputChange} />
                    </label>
                    <label>
                        Sets:
                        <Input iType="number" iName="sets" iValue={exercise.sets} iChange={handleInputChange}/>
                    </label>
                    <label>
                        Reps:
                        <Input iType="number" iName="reps" iValue={exercise.reps} iChange={handleInputChange}/>
                    </label>
                    <label>
                        Weight:
                        <Input iType="number" iName="weight" iValue={exercise.weight} iChange={handleInputChange}/>
                    </label>
                </form>
            </div>
            {!popStatus && null}
        </>
    )
}

export default AddExercise;