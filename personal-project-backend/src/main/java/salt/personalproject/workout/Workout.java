package salt.personalproject.workout;

import jakarta.persistence.*;
import salt.personalproject.Exercises.Exercise;

import java.util.List;

@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "workout_exercise",
            joinColumns = @JoinColumn(name = "workout_id"),
            inverseJoinColumns = @JoinColumn(name = "exercise_id"))
    private List<Exercise> exercises;

    public Long getId() {
        return id;
    }

    public Workout setId(Long id) {
        this.id = id;
        return this;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public Workout setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
        return this;
    }
}
