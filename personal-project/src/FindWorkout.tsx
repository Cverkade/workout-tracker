import axios from "axios";
import {useState} from "react";
import {exercise} from "./Exercise.tsx";


const findWorkout = () => {

    const [savedWorkout, setSavedWorkout] = useState<exercise[]>([])
    const findWorkoutById = async (e) => {
        e.preventDefault()
        const response = await axios.get(`http://localhost:8080/exercises/workout/` + e.target.workoutId.value)
        console.log(response.data)
        setSavedWorkout(response.data);
        return response.data;

    }

    return <>
    <p>Hello</p>
        <form onSubmit={findWorkoutById}>
            <label htmlFor="fname">Search for a workout by ID</label><br/>
            <input type="text" id="workoutId" name="fname"/><br/>
                    <input type="submit" value="Submit"/>
        </form>

        {savedWorkout.map(exercise => <p>{exercise.name}</p>)}
    </>
}

export default findWorkout;