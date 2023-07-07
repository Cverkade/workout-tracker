import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";
import {exercise} from './Exercise.tsx'
import ExerciseSelection from "./ExerciseSelection.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import FindWorkout from "./FindWorkout.tsx";
import Button from "react-bootstrap/Button";

function App() {
    const [exercises, setExercises] = useState<exercise[]>([])
    const [create, setCreate] = useState<boolean>(false)
    const [search, setSearch] = useState<boolean>(false)


    useEffect(() => {
        fetchData().then(data => setExercises(data))

    }, [])
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:8080/exercises/`)
        return response.data;
    }

    function createHandler(e) {
        e.target.parentNode.style = "margin-top : 0px;"
        e.target.nextSibling.style = "background-color: #faf9f0; color: black";
        e.target.style ="background-color: #27456a; color: white;"
        setCreate(true)
        setSearch(false)
    }

    function searchHandler(e) {
        e.target.parentNode.style = "margin-top : 0px;"
        e.target.previousSibling.style = "background-color: #faf9f0; color: black";
        e.target.style ="background-color: #27456a; color: white;"
        setCreate(false)
        setSearch(true)
    }

    return (
        <>
            <header>
                <h1>OutWork</h1>
                <h4>The Workout App</h4>
            </header>
            <div className="main">
                <div className={"taskSelection"}>
                    <button onClick={createHandler}>Create New Workout</button>
                    <button onClick={searchHandler}>Search for Previous Workout</button>
                </div>
                {search && (<FindWorkout/>)}
                {create && (<ExerciseSelection exercises = {exercises} setExercises = {setExercises}/>)}
            </div>
        </>
    )
}

export default App
