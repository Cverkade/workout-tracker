import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";
import {exercise} from './Exercise.tsx'
import ExerciseSelection from "./ExerciseSelection.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const [count, setCount] = useState(0)
    const [exercises, setExercises] = useState<exercise[]>([])


    useEffect(() => {
        fetchData().then(data => setExercises(data.filter(data => data.equipment == "barbell")))

    }, [])
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:8080/exercises/`)
        console.log(response.data);
        return response.data;
    }

    return (
        <>
            <div>
                <ExerciseSelection exercises = {exercises}/>
            </div>
        </>
    )
}

export default App
