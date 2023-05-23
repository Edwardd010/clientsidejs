import React, {useContext, useState} from "react";
import './AddWorkout.css'
import exit from '../../assets/exit.png'
import {Link, Navigate, useNavigate} from "react-router-dom";
import Input from "../../components/Input/Input";
import AddExercise from "../../components/AddExercise/AddExercise";
import {AuthContext} from "../../context/AuthContext";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import workoutService from "../../services/workoutService";
import exerciseService from "../../services/exerciseService";

function AddWorkout() {
    const currentDate = new Date();
    const { showOpenFunction } = useContext(AuthContext);
    const options = { day: "numeric", month: "short" };
    const formattedDate = currentDate.toLocaleString("en-US", options);

    const [isAddExerciseOpen, setIsAddExerciseOpen] = useState(false);
    const Navigate = useNavigate();

    const [exerciseList, setExerciseList] = useState([]);


    const [workout, setWorkout] = useState({
        workoutName: '',
        workoutDate: formattedDate,
        exercises: []
    });

    const addExercise = (exercise) => {
        setExerciseList(prevList => [...prevList, exercise]);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setWorkout(prevWorkout => ({
            ...prevWorkout,
            [name]: value
        }));
    };

    const handleOpenAdd = (event) => {
        showOpenFunction();
        setIsAddExerciseOpen(true);
    };

    const handleConfirm = (event) => {
        event.preventDefault();

        const updatedWorkout = {
            workoutName: workout.workoutName,
            workoutDate: formattedDate,
            exercises: exerciseList
        }

        workoutService.createWorkout(updatedWorkout)
            .then(data => {
                console.log('Workout created successfully:', data);
            })
            .catch(error => {
                console.error('Error creating workout:', error);
            });

        exerciseService.createExercises(updatedWorkout.exercises)
            .then(data => {
                console.log('Exercises created successfully:', data);
            })
            .catch(error => {
                console.error('Error creating exercises:', error);
            });


        setWorkout({
            workoutName: '',
            workoutDate: formattedDate,
            exercises: []
        });

        setIsAddExerciseOpen(false);
        Navigate("/home");
    };

    return (
        <>
            <div className="add-workout-container">
                <div className="add-workout-toolbar">
                    <Link to="/home">
                        <img className="add-workout-exit" src={exit} alt="exit"/>
                    </Link>
                    <h1 className="add-workout-logo">{formattedDate}</h1>
                    <Link to="/home">
                        <h4 className="new-card" onClick={handleConfirm}>Confirm</h4>
                    </Link>
                </div>
                <div className="form-container">
                    <form className="workout-form">
                        <Input
                            iClassName="workout-name"
                            iType="text"
                            iPlaceholder="Name"
                            iName="workoutName"
                            iValue={workout.workoutName}
                            iChange={handleInputChange}
                        />
                        <Input
                            iClassName="workout-date"
                            iType="text"
                            iPlaceholder="Date"
                            iName="workoutDate"
                            iValue={workout.workoutDate}
                            iChange={handleInputChange}
                        />
                        <Input
                            iClassName="bodyweight"
                            iType="text"
                            iPlaceholder="Bodyweight"
                            // iValue={bodyweight}
                            iChange={handleInputChange}
                        />
                        <Input
                            iClassName="workout-notes"
                            iType="text"
                            iPlaceholder="Notes"
                            // iValue={workoutNotes}
                            iChange={handleInputChange}
                        />
                    </form>
                    <ExerciseList exercises={exerciseList}/>
                    <button className="add-exercise" type="button" onClick={handleOpenAdd}>Add Exercise</button>
                </div>
            </div>
            {isAddExerciseOpen && <AddExercise addExercise={addExercise}/>}
        </>
    )
}

export default AddWorkout;