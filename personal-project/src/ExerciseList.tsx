import {exercise} from "./Exercise.tsx";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import WorkoutTemplate from "./WorkoutTemplate.tsx";


type selectedExerciseProps = {
    selectedMuscleGroup : string
    exercises : exercise[]
}

const ExerciseList = (props: selectedExerciseProps) => {
    const [workout, setWorkout] = useState<exercise[]>([])

    const addToWorkout = (e) => {
        e.preventDefault();
        const exerciseToAdd = props.exercises.find(exercise => exercise.name.toLowerCase() === e.target.id)
        if (exerciseToAdd) {
            setWorkout([...workout, exerciseToAdd]);
        }
        console.log(workout)
    }

    return <>
        <h2>Select Exercises</h2>
        <section className={"exercisesListContainer"}>
        {props.exercises
                .filter(exercise => exercise.bodyPart == props.selectedMuscleGroup.toLowerCase())
                .map(exercise => <Button variant="outline-info" id = {exercise.name.toLowerCase()} onClick = {addToWorkout}>{exercise.name} +</Button>)
        }
        </section>
        <WorkoutTemplate workout = {workout}/>
    </>
}


export default ExerciseList