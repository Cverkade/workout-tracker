package salt.personalproject.Exercises;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/exercises")
public class ExerciseController {
    @Autowired
    ExerciseService service;

    @GetMapping()
    ResponseEntity<?> getSpecificExercise() throws IOException, InterruptedException {
        List<ExerciseDTO> response = service.fetchData();
        return ResponseEntity.ok(response);
    }
}
