import {exercise} from "./Exercise.tsx";
import { useState} from "react";
import ExerciseList from "./ExerciseList.tsx";
import Button from 'react-bootstrap/Button';


type exercisesProps = {
    exercises : exercise[]
    setExercises: (arg : exercise[]) => void
}

const ExerciseSelection = (props: exercisesProps) => {

    const muscleGroups = ["Back", "Chest", "Lower legs", "Shoulders", "Upper arms", "Upper legs", "Waist"]
    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>('')
    const [showSelectMenu, setShowSelectMenu]= useState<boolean>(false)

    const clickHandler = (e) => {
        e.preventDefault();
        setSelectedMuscleGroup(e.target.textContent);
        setShowSelectMenu(true)
    }

    return <>
        <div className= "buttonContainer" >
        <h2>Step 1: Select Muscle Group</h2>
        {muscleGroups.map( muscleGroup => <Button className="selectMuscleBtn" onClick={clickHandler}>{muscleGroup}</Button>)}
        </div>
        {showSelectMenu && (<ExerciseList selectedMuscleGroup = {selectedMuscleGroup} exercises = {props.exercises} setExercises = {props.setExercises}/>)}
    </>
}


export default ExerciseSelection