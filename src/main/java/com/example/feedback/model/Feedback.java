package com.example.feedback.model;

import lombok.Data;

import javax.validation.constraints.NotNull;

// Lombok's @Data annotation automatically creates
// getters and setters for us, as well as toString
// and equals()
@Data
public class Feedback {
    @NotNull
    private Integer rating;
    private String category;
    private String body;
}
