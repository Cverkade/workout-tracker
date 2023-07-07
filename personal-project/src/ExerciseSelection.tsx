import {exercise} from "./Exercise.tsx";
import { useState} from "react";
import ExerciseList from "./ExerciseList.tsx";
import Button from 'react-bootstrap/Button';


type exercisesProps = {
    exercises : exercise[]
    setExercises: (arg : exercise[]) => void
}

const ExerciseSelection = (props: exercisesProps) => {
    const equipment = ["barbell", "body weight", "cable", "dumbbell", "kettlebell", "resistance band", "smith machine"]
    const muscleGroups = ["Back", "Chest", "Lower legs", "Shoulders", "Upper arms", "Upper legs", "Waist"]
    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>('')
    const [selectedEquipment, setSelectedEquipment] = useState<string>('')
    const [showSelectMenu, setShowSelectMenu]= useState<boolean>(false)
    const [showEquipmentMenu, setShowEquipmentMenu]= useState<boolean>(false)

    const grpClickHandler = (e) => {
        e.preventDefault();
        setSelectedMuscleGroup(e.target.textContent);
        setShowEquipmentMenu(true)
        const buttons = e.target.parentNode.querySelectorAll(".selectMuscleBtn")
        buttons.forEach((button) => {
            button.style = "background-color: #faf9f0; color: black";
        });
        e.target.style = "background-color: #27456a; color: white;"
    }

    const equipmentClickHandler = (e) => {
        e.preventDefault();
        setSelectedEquipment(e.target.textContent);
        setShowSelectMenu(true)

        const buttons = e.target.parentNode.querySelectorAll(".selectEquipmentBtn")
        buttons.forEach((button) => {
            button.style = "background-color: #faf9f0; color: black";
        });
        e.target.style = "background-color: #27456a; color: white;"
    }

    return <>
        <div className= "buttonContainer" >
        <h2>Step 1: Select Muscle Group</h2>
        {muscleGroups.map( muscleGroup => <Button className="selectMuscleBtn" onClick={grpClickHandler}>{muscleGroup}</Button>)}
        </div>
        {showEquipmentMenu && (<div className= "buttonContainer" >
            <h2>Step 2: Select Equipment</h2>
            {equipment.map( equipment => <Button className="selectEquipmentBtn" onClick={equipmentClickHandler}>{equipment}</Button>)}
        </div>)}
        {showSelectMenu && (<ExerciseList selectedEquipment = {selectedEquipment} selectedMuscleGroup = {selectedMuscleGroup} exercises = {props.exercises} setExercises = {props.setExercises}/>)}

    </>
}


export default ExerciseSelection