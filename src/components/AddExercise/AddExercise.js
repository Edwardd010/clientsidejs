import React, {useContext, useState} from "react";
import './AddExercise.css'
import Input from "../Input/Input";
import exit from "../../assets/exit.png";
import {AuthContext} from "../../context/AuthContext";
import {ExerciseContext} from "../../context/ExerciseContext";


function AddExercise(){

    const {showCloseFunction, popStatus } = useContext(AuthContext);



    const {
        exerciseName,
        setExerciseName,
        sets,
        setSets,
        reps,
        setReps,
        weight,
        setWeight,
        setIsExerciseAdded,
    } = useContext(ExerciseContext);

    function handleExerciseNameChange(event) {
        setExerciseName(event.target.value);
    }
    function handleSetsChange(event) {
        setSets(event.target.value);
    }
    function handleRepsChange(event) {
        setReps(event.target.value);
    }
    function handleWeightChange(event) {
        setWeight(event.target.value);
    }
    function handleCloseAddExercise(event){
        showCloseFunction();
    }

    function handleAddExercise(event) {
        event.preventDefault();
        setIsExerciseAdded(true);
        showCloseFunction();
    }


    return (
        <>
            <div className="add-exercise-container">
                <div className="add-header">
                    <img className="add-exercise-exit" src={exit} alt="exit" onClick={handleCloseAddExercise}/>
                    <h2>Add Exercise</h2>
                    <a onClick={handleAddExercise}>
                        <h4>Add</h4>
                    </a>
                </div>
                <form>
                    <label>
                        Exercise Name:
                        <Input iType="text" iValue={exerciseName} iChange={handleExerciseNameChange}/>
                    </label>
                    <label>
                        Sets:
                        <Input iType="text" iValue={sets} iChange={handleSetsChange}/>
                    </label>
                    <label>
                        Reps:
                        <Input iType="text" iValue={reps} iChange={handleRepsChange}/>
                    </label>
                    <label>
                        Weight:
                        <Input iType="text" iValue={weight} iChange={handleWeightChange}/>
                    </label>
                </form>
            </div>
            {!popStatus && null}
        </>
    )
}

export default AddExercise;