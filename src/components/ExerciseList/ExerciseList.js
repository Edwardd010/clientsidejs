import React, { useState, useEffect } from 'react';
import exerciseService from '../../services/exerciseService';
import './ExerciseList.css';

function ExerciseList() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        exerciseService.getExercises()
            .then(data => {
                setExercises(data);
            })
            .catch(error => {
                console.error('Error getting exercises:', error);
            });
    }, []);

    return (
        <>
            {exercises.map(exercise => (
                <div className="ecard-container">
                    <h2 className="ecard-title">{exercise.exerciseName}</h2>
                    <h3 className="ecard-object">Sets: {exercise.sets}</h3>
                    <h3 className="ecard-object">Reps: {exercise.reps}</h3>
                    <h3 className="ecard-object">Weight: {exercise.weight}kg</h3>
                </div>
            ))}
        </>
    );
}

export default ExerciseList;