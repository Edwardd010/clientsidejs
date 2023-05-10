import React, {useContext, useState} from "react";
import './AddWorkout.css'
import exit from '../../assets/exit.png'
import {Link} from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import AddExercise from "../../components/AddExercise/AddExercise";
import {AuthContext} from "../../context/AuthContext";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import {ExerciseContext} from "../../context/ExerciseContext";
function AddWorkout(){

    const currentDate = new Date();

    const options = { day: "numeric", month: "short" };
    const formattedDate = currentDate.toLocaleString("en-US", options);

    const [workoutName, setWorkoutName] = useState("");
    const [workoutNotes, setWorkoutNotes] = useState("");
    const [bodyweight, setBodyweight] = useState("");
    const [workoutDate, setWorkoutDate] = useState("");

    const {showOpenFunction, popStatus} = useContext(AuthContext);

    const {
        isExerciseAdded,
    } = useContext(ExerciseContext);

    function handleNameChange(event) {
        setWorkoutName(event.target.value);
    }
    function handleNotesChange(event) {
        setWorkoutNotes(event.target.value);
    }
    function handleBWChange(event) {
        setBodyweight(event.target.value);
    }
    function handleDateChange(event) {
        setWorkoutDate(event.target.value);
    }

    function handleOpenAdd(event){
        showOpenFunction();
    }

    return (
        <>
            <div className="add-workout-container">
                <div className="add-workout-toolbar">
                    <Link to="/home">
                        <img className="add-workout-exit" src={exit} alt="exit"/>
                    </Link>
                    <h1 className="add-workout-logo">{formattedDate}</h1>
                    <h4>Confirm</h4>
                </div>
                <div className="form-container">
                    <form className="workout-form">
                        <Input
                            iClassName="workout-name"
                            iType="text"
                            iPlaceholder="Name"
                            iValue={workoutName}
                            iChange={handleNameChange}
                        />
                        <Input
                            iClassName="workout-name"
                            iType="text"
                            iPlaceholder="Date"
                            iValue={workoutDate}
                            iChange={handleDateChange}
                        />
                        <Input
                            iClassName="bodyweight"
                            iType="text"
                            iPlaceholder="Bodyweight"
                            iValue={bodyweight}
                            iChange={handleBWChange}
                        />
                        <Input
                            iClassName="workout-notes"
                            iType="text"
                            iPlaceholder="Notes"
                            iValue={workoutNotes}
                            iChange={handleNotesChange}
                        />
                    </form>
                    {isExerciseAdded && <ExerciseCard/>}
                    <button className="add-exercise" type="button" onClick={handleOpenAdd}>Add Exercise</button>
                </div>
            </div>
            {popStatus && <AddExercise/>}
        </>
    )
}

export default AddWorkout;