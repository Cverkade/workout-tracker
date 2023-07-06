import {exercise} from "./Exercise.tsx";
import { useState} from "react";
import ExerciseList from "./ExerciseList.tsx";
import Button from 'react-bootstrap/Button';


type exercisesProps = {
    exercises : exercise[]
}

const ExerciseSelection = (props: exercisesProps) => {

    const muscleGroups = ["Back", "Chest", "Lower legs", "Shoulders", "Upper arms", "Upper legs", "Waist"]
    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>('')

    const clickHandler = (e) => {
        e.preventDefault();
        console.log(e.target.textContent)
        setSelectedMuscleGroup(e.target.textContent);
    }

    return <>
        <h2>Select Muscle Group</h2>
        <div className= "buttonContainer" >
        {muscleGroups.map( muscleGroup => <Button variant="outline-success" onClick={clickHandler}>{muscleGroup}</Button>)}
        </div>
        <ExerciseList selectedMuscleGroup = {selectedMuscleGroup} exercises = {props.exercises}/>
    </>
}


export default ExerciseSelection