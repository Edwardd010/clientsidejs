import React, {useContext, useState} from "react";
import './AddExercise.css'
import Input from "../Input/Input";
import exit from "../../assets/exit.png";
import AddWorkout from "../../pages/AddWorkout/AddWorkout";
import {AuthContext} from "../../context/AuthContext";


function AddExercise(){

    const [exerciseName, setExerciseName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");

    const {showCloseFunction, popStatus} = useContext(AuthContext);

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


    return (
        <>
            <div className="add-exercise-container">
                <div className="add-header">
                    <img className="add-exercise-exit" src={exit} alt="exit" onClick={handleCloseAddExercise}/>
                    <h2>Add Exercise</h2>
                    <h4>Add</h4>
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