import React, { useState, useEffect } from 'react';
import exerciseService from '../../services/exerciseService';
import './ExerciseList.css';
import deleted from "../../assets/delete.png";

function ExerciseList({exercises}) {

    function handleDelete(index) {
        exerciseService.deleteExercise(index);
    }

    return (
        <>
            {exercises && exercises.length > 0 && (
                exercises.map((exercise, index) => (
                    <div key={index} className="ecard-container">
                        <div className="ecard-header">
                            <h2 className="ecard-title">{exercise.exerciseName}</h2>
                            <img className="ecard-delete" src={deleted} alt="delete" onClick={() => handleDelete(exercise.id)}/>
                        </div>
                        <h3 className="ecard-object">Sets: {exercise.sets}</h3>
                        <h3 className="ecard-object">Reps: {exercise.reps}</h3>
                        <h3 className="ecard-object">Weight: {exercise.weight}kg</h3>
                    </div>
                )))
            }
        </>
    );
}

export default ExerciseList;