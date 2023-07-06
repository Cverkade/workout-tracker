package salt.personalproject.Exercises;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ExerciseDTO {
    @JsonProperty
    private String name;
    @JsonProperty
    private String bodyPart;
    @JsonProperty
    private String target;
    @JsonProperty
    private String equipment;
}
