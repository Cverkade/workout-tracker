package salt.personalproject.Exercises;

import jakarta.persistence.*;

@Entity
@Table(name = "exercises")
public class Exercise {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="exercise_id")
        private Long id;
        @Column(name="name")
        private String name;
    }
