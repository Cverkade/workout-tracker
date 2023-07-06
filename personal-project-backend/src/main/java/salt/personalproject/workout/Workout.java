package salt.personalproject.Exercises;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "workout_id")
    private List<Exercise> exercises;

    public List<Exercise> getExercises() {
        return exercises;
    }

    public Workout setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
        return this;
    }
}
