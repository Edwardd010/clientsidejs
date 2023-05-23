import React, {useEffect, useState} from "react";
import './WorkoutCards.css'
import workoutService from "../../services/workoutService";
import exerciseService from "../../services/exerciseService";

function WorkoutCards(){

    const [workouts, setWorkouts] = useState([]);
    const [exercises, setExercises] = useState([]);

    useEffect(()=> {
        workoutService.getWorkouts()
            .then(data => {
                setWorkouts(data);

            })
            .catch(error => {
                console.error('Error getting workouts:', error);
            })
    }, [])

    useEffect(()=> {
        exerciseService.getExercises()
            .then(data => {
                setExercises(data);

            })
            .catch(error => {
                console.error('Error getting workouts:', error);
            })
    }, [])


    const exercisesByWorkoutId = exercises.reduce((acc, exercise) => {
        const workoutId = exercise.workoutId;
        if (!acc[workoutId]) {
            acc[workoutId] = [];
        }
        acc[workoutId].push(exercise);
        return acc;
    }, {});

    return(
        <>
            {workouts && workouts.length > 0 &&
                <div className="wcard-container">
                    {workouts.map((workout, index) => (
                        <div className="wcard">
                            <div key={workout.id} className="wcard-header">
                                <h2>{workout.workoutName}</h2>
                                <h2>{workout.workoutDate}</h2>
                            </div>
                                {exercisesByWorkoutId[workout.id] &&
                                    exercisesByWorkoutId[workout.id].map((exercise, index) => (
                                        <h4 key={exercise.exerciseId}>{exercise.exerciseName}</h4>
                                    ))}
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default WorkoutCards;