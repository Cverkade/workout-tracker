package salt.personalproject.Exercises;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "exercises")
public class Exercise {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="exercise_id")
        private Long id;
        private String name;
        private String bodyPart;
        private String target;
        private String equipment;

        public Exercise(Long id, String name, String bodyPart, String target, String equipment) {
                this.id = id;
                this.name = name;
                this.bodyPart = bodyPart;
                this.target = target;
                this.equipment = equipment;
        }

        public Exercise() {

        }

        public Long getId() {
                return id;
        }

        public Exercise setId(Long id) {
                this.id = id;
                return this;
        }

        public String getName() {
                return name;
        }

        public Exercise setName(String name) {
                this.name = name;
                return this;
        }

        public String getBodyPart() {
                return bodyPart;
        }

        public Exercise setBodyPart(String bodyPart) {
                this.bodyPart = bodyPart;
                return this;
        }

        public String getTarget() {
                return target;
        }

        public Exercise setTarget(String target) {
                this.target = target;
                return this;
        }

        public String getEquipment() {
                return equipment;
        }

        public Exercise setEquipment(String equipment) {
                this.equipment = equipment;
                return this;
        }
}
