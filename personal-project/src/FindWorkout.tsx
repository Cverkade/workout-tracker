import axios from "axios";
import {useRef, useState} from "react";
import {exercise} from "./Exercise.tsx";
import {map} from "react-bootstrap/ElementChildren";


const findWorkout = () => {
    const [savedWorkout, setSavedWorkout] = useState<exercise[]>([])
    const [workoutFound, setWorkoutFound] = useState<boolean>(false)
    const myRef = useRef<HTMLInputElement>(null);
    let workoutId = 0;
    const findWorkoutById = async (e: any) => {
        e.preventDefault()
        workoutId = e.target.workoutId.value
        try {
            const response = await axios.get(`http://localhost:8080/exercises/workout/` + e.target.workoutId.value)
            setSavedWorkout(response.data);
            setWorkoutFound(true)
            return response.data;
        }
        catch {
            alert("Workout with this ID does not exist")
        }
    }
    return <>
        <form onSubmit={findWorkoutById}>
            <label htmlFor="fname">Search for a workout by ID</label><br/>
            <input ref={myRef} type="search" id="workoutId"/><br/>
                    <input type="submit" value="Submit"/>
        </form>
        <br/>
        <div className="workoutContainer">
        {workoutFound && (
            <div className={"savedWorkout"}>
                <h5>Saved workout {myRef.current.value}</h5>
                {savedWorkout.map(exercise => <li>{exercise.name}</li>)}
            </div>
        )}
        </div>


    </>
}

export default findWorkout;