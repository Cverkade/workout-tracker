import {exercise} from "./Exercise.tsx";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {useState} from "react";

type workoutProps = {
    workout : exercise[]
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

    return <>
        <h3>My Exercises:</h3>
        <div className="workoutProgramList">
        {props.workout.map(exercise =>
        <li>{exercise.name}</li>
            )}
        </div>
        <Button type="submit" onClick={storeWorkout}>Save</Button>
    </>
}


export default WorkoutTemplate