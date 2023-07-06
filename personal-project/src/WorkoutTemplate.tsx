import {exercise} from "./Exercise.tsx";

type workoutProps = {
    workout : exercise[]
}

const WorkoutTemplate = (props: workoutProps) => {


    return <>
        <h3>My Exercises:</h3>
        {props.workout.map(exercise =>
        <li>{exercise.name}</li>
            )}
        <button>Save</button>
    </>
}


export default WorkoutTemplate