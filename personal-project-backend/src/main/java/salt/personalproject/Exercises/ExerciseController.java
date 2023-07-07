package salt.personalproject.Exercises;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.personalproject.workout.Workout;
import salt.personalproject.workout.WorkoutService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/exercises")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class ExerciseController {
    @Autowired
    ExerciseService exerciseService;

    @Autowired
    WorkoutService workoutService;

    @GetMapping("/")
    ResponseEntity<?> getExercises() throws IOException, InterruptedException {
        List<ExerciseDTO> response = exerciseService.fetchData();
        return ResponseEntity.ok(response);
    }

    @GetMapping("workout/{id}")
    ResponseEntity<?> getExercisesByWorkoutById(@PathVariable Long id ) throws IOException, InterruptedException {
       Workout workout = workoutService.getByID( id);
       List<Exercise> exercises = workout.getExercises();
        return ResponseEntity.ok(exercises);
    }

    @ResponseBody
    @PostMapping("/")
    String saveWorkout(@RequestBody List<Exercise> exercises) throws IOException, InterruptedException {
        Workout workout = new Workout();
        for (Exercise exercise: exercises) {
            Exercise exercise1 = new Exercise();
            exercise1.setBodyPart(exercise.getBodyPart());
            exercise1.setName(exercise.getName());
            exercise1.setEquipment(exercise.getEquipment());
            exercise1.setTarget(exercise.getTarget());
            exercise1.setGifUrl(exercise.getGifUrl());
            exerciseService.saveExercise(exercise1);
        }
        workout.setExercises(exercises);
        workoutService.saveWorkout(workout);

        return workout.getId().toString();
    }

}
