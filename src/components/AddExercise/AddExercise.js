import React, {useContext, useState} from "react";
import './AddExercise.css'
import Input from "../Input/Input";
import exit from "../../assets/exit.png";
import {AuthContext} from "../../context/AuthContext";



function AddExercise({addExercise}){

    const { showCloseFunction, showAdd } = useContext(AuthContext);

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
        console.log("Submitted correctly" + JSON.stringify(exercise));
        addExercise(exercise);
        setExercise({
            exerciseName: '',
            sets: 0,
            reps: 0,
            weight: 0
        });
        showCloseFunction();
    };

    const handleExit = (event) => {
        showCloseFunction();
    };


    return (
        <>
            {showAdd &&
                <div className="add-exercise-container">
                    <div className="add-header">
                        <img className="add-exercise-exit" src={exit} alt="exit" onClick={handleExit}/>
                        <h2>Add Exercise</h2>
                        <h4 onClick={handleSubmit}>Add</h4>
                    </div>
                    <form>
                        <label>
                            Exercise Name:
                            <Input iType="text" iName="exerciseName" iValue={exercise.exerciseName} iChange={handleInputChange}/>
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
            }
        </>
    )
}

export default AddExercise;