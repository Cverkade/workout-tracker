import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
