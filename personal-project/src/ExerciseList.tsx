import {exercise} from "./Exercise.tsx";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import WorkoutTemplate from "./WorkoutTemplate.tsx";

type selectedExerciseProps = {
    selectedMuscleGroup : string
    exercises : exercise[]
    setExercises: (arg : exercise[]) => void
}

const ExerciseList = (props: selectedExerciseProps) => {
    const [workout, setWorkout] = useState<exercise[]>([])

    const addToWorkout = (e) => {
        e.preventDefault();
        const exerciseToAdd = props.exercises.find(exercise => exercise.name.toLowerCase() === e.target.id)
        if (exerciseToAdd) {
            setWorkout([...workout, exerciseToAdd]);
            const index = props.exercises.findIndex(exercise => exercise == exerciseToAdd)
            props.exercises.splice(index,1);
        }
        e.target.remove;
    }

    return <>
        <h2>Select Exercises</h2>
        <section className={"exercisesListContainer"}>
        {props.exercises
                .filter(exercise => exercise.bodyPart == props.selectedMuscleGroup.toLowerCase())
                .map(exercise => <Button variant="info" id = {exercise.name.toLowerCase()} onClick = {addToWorkout}>{exercise.name} +</Button>)
        }
        </section>
        <WorkoutTemplate workout = {workout} setWorkout = {setWorkout} exercises = {props.exercises} setExercises = {props.setExercises}/>
    </>
}


export default ExerciseList