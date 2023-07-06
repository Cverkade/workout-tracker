import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";
import {exercise} from './Exercise.tsx'
import ExerciseSelection from "./ExerciseSelection.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [exercises, setExercises] = useState<exercise[]>([])


    useEffect(() => {
        fetchData().then(data => setExercises(data.filter(data => data.equipment == "barbell")))

    }, [])
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:8080/exercises/`)
        return response.data;
    }

    return (
        <>

            <header>
                <h1>OutWork</h1>
                <h4>The Workout App</h4>
            </header>
            <div className="main">
                <ExerciseSelection exercises = {exercises} setExercises = {setExercises}/>
            </div>
        </>
    )
}

export default App
