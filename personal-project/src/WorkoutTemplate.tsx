import {exercise} from "./Exercise.tsx";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import FindWorkout from "./FindWorkout.tsx";

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
    const storeWorkout = async (e) => {
        const response = await axios.post("http://localhost:8080/exercises/", props.workout)
        const newWorkoutTemplate : WorkoutTemplate = {
            id : response.data,
            exercises : props.workout
        }
        if (workoutArr && props.workout.length > 0) {
            setWorkoutArr([...workoutArr, newWorkoutTemplate]);
            props.setExercises([...props.exercises, ...props.workout])
            props.setWorkout([])
        }
    }

    const removeFromWorkout = (e) => {
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
        <h3>My Exercises:</h3>
        <div className="workoutProgramList">
        {props.workout.map(exercise =>
        <Button onClick = {removeFromWorkout}>{exercise.name}</Button>
            )}
            <Button type="submit" onClick={storeWorkout}>Save</Button>
        </div>

        <h3>My Workout</h3>
        <div className="workoutContainer">
        {workoutArr.map((workout) => (
            <div className="savedWorkout">
                <h5>Workout Template: {workout.id}</h5>
                {workout.exercises.map((exercise) => (
                    <p>{exercise.name}</p>
                ))}
                <br />
            </div>
        ))}
        </div>
        <FindWorkout/>
    </>
}


export default WorkoutTemplate