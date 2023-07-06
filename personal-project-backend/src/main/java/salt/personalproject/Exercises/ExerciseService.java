package salt.personalproject.Exercises;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import salt.personalproject.workout.Workout;
import salt.personalproject.workout.WorkoutRepository;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

@Service
public class ExerciseService {

    @Autowired
    ExerciseRepository repo;

    public List<ExerciseDTO> fetchData() throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://exercisedb.p.rapidapi.com/exercises/"))
                .header("X-RapidAPI-Key", "6ed241ab7amsha7e1db3d638ce13p1efb12jsnb050541c1782")
                .header("X-RapidAPI-Host", "exercisedb.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        ObjectMapper objectMapper = new ObjectMapper();
        List<ExerciseDTO> exercises = objectMapper.readValue(response.body(), new TypeReference<List<ExerciseDTO>>() {});
        return exercises;
    }

    public void saveExercise(Exercise exercise){
        repo.save(exercise);
    }
}
