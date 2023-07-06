import {exercise} from "./Exercise.tsx";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {useState} from "react";

type workoutProps = {
    workout : exercise[]
    setWorkout: (arg : exercise[]) => void
    exercises : exercise[]
    setExercises: (arg : exercise[]) => void
}

type WorkoutTemplate = {
    id : number
    exercises : exercise[]
}

const WorkoutTemplate = (props: workoutProps) => {

    const [workoutArr, setWorkoutArr] = useState<WorkoutTemplate[]>([]);
    const storeWorkout = async () => {
        const response = await axios.post("http://localhost:8080/exercises/", props.workout)
        const newWorkoutTemplate : WorkoutTemplate = {
            id : response.data,
            exercises : props.workout
        }
        if (workoutArr) {
            setWorkoutArr([...workoutArr, newWorkoutTemplate]);
        }
        console.log(workoutArr)
    }

    const removeFromWorkout = (e) => {
        e.preventDefault();
        console.log(e.target.textContent)
        const exercise = props.workout.find(exercise => exercise.name == e.target.textContent)
        const index = props.workout.findIndex(exercise => exercise.name == e.target.textContent)
        if (props.exercises && exercise) {
            props.setExercises([...props.exercises, exercise])
        }
        props.workout.splice(index, 1)
        props.setWorkout([...props.workout])
    }


    return <>
        <h3>My Exercises:</h3>
        <div className="workoutProgramList">
        {props.workout.map(exercise =>
        <Button onClick = {removeFromWorkout}>{exercise.name}</Button>
            )}
        </div>
        <Button type="submit" onClick={storeWorkout}>Save</Button>
    </>
}


export default WorkoutTemplate