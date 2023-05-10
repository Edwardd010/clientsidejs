import {createContext, useState} from "react";

export const ExerciseContext = createContext();

function ExerciseContextProvider({ children }){

    const [exerciseName, setExerciseName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");

    const [isExerciseAdded, setIsExerciseAdded] = useState(false);

    const ExerciseData = {
        exerciseName,
        sets,
        reps,
        weight,
        setExerciseName,
        setSets,
        setReps,
        setWeight,
        isExerciseAdded,
        setIsExerciseAdded,
    }

    return(
        <>
            <ExerciseContext.Provider value={ExerciseData}>
                {children}
            </ExerciseContext.Provider>
        </>
    )
}

export default ExerciseContextProvider;