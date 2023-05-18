import React, {useEffect, useState} from "react";
import './WorkoutCards.css'
import workoutService from "../../services/workoutService";

function WorkoutCards(){

    const [workouts, setWorkouts] = useState([]);

    useEffect(()=> {
        workoutService.getWorkouts()
            .then(data => {
                setWorkouts(data);
            })
            .catch(error => {
                console.error('Error getting workouts:', error);
            })
    }, [])

    return(
        <>
            {workouts.length > 0 &&
                <div className="wcard-container">
                    {workouts.map((workout, index) => (
                        <div key={workout.id} className="wcard-header">
                            <h2>{workout.workoutName}</h2>
                            <h2>{workout.workoutDate}</h2>
                        </div>
                    ))}
                    {/*{exercises.map((exercise, index) => (*/}
                    {/*    <div key={exercise.id} className="wcard-main">*/}
                    {/*        <h4>{exercise.exerciseName}</h4>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </div>
            }
        </>
    )
}

export default WorkoutCards;