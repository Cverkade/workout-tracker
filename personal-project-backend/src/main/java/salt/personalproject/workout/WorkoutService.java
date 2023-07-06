package salt.personalproject.workout;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkoutService {
    @Autowired
    WorkoutRepository repo;

    public void saveWorkout (Workout workout) {
        repo.save(workout);
    }

    public Workout getByID (Long id) {
        return repo.getById(id);
    }

}
