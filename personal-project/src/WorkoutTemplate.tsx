import {exercise} from "./Exercise.tsx";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {useState} from "react";

type workoutProps = {
    workout : exercise[]
    setWorkout: (arg : exercise[]) => void
    exercises : exercise[]
    setExercises: (arg : exercise[]) => void
    saveButton : boolean
    setSaveButton: (arg : boolean) => void
}

type WorkoutTemplate = {
    id : number
    exercises : exercise[]
}

const WorkoutTemplate = (props: workoutProps) => {

    const [workoutArr, setWorkoutArr] = useState<WorkoutTemplate[]>([]);
    const storeWorkout = async () => {
        if (props.workout.length > 0) {
            const response = await axios.post("http://localhost:8080/exercises/", props.workout)
            const newWorkoutTemplate: WorkoutTemplate = {
                id: response.data,
                exercises: props.workout
            }
        if (workoutArr) {
            setWorkoutArr([...workoutArr, newWorkoutTemplate]);
            props.setExercises([...props.exercises, ...props.workout])
            props.setWorkout([])
            props.setSaveButton(false)
        }
        }
    }
    const removeFromWorkout = (e : any) => {
        e.preventDefault();
        const exercise = props.workout.find(exercise => exercise.name == e.target.textContent)
        const index = props.workout.findIndex(exercise => exercise.name == e.target.textContent)
        if (props.exercises && exercise) {
            props.setExercises([...props.exercises, exercise])
        }
        props.workout.splice(index, 1)
        props.setWorkout([...props.workout])
    }


    return <>
    {props.saveButton &&(
        <div className="workoutProgramList">
        <h2>Selected Exercises:</h2>
            <div className = "savedWorkoutBtns">
        {props.workout.map(exercise =>
        <Button onClick = {removeFromWorkout}>{exercise.name}</Button>
            )}
            </div>
                <Button type="submit" className={"workoutSubmitBtn"} onClick={storeWorkout}>Save</Button>
        </div>)}
        <h2>My Workouts</h2>
        <div className="workoutContainer">
        {workoutArr.map((workout) => (
            <div className="savedWorkout">
                <h5>Workout ID: {workout.id}</h5>
                {workout.exercises.map((exercise) => (
                    <li>{exercise.name}</li>
                ))}
                <br />
            </div>
        ))}
        </div>

    </>
}

export default WorkoutTemplate