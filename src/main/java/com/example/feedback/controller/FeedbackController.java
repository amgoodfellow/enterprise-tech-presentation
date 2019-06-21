package com.example.feedback.controller;

import com.example.feedback.model.Feedback;
import com.example.feedback.service.FeedbackService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import javax.validation.Valid;

@RestController
public class FeedbackController {
    // Database Service
    @Autowired private FeedbackService service;

    // Better error handling would be good, but this is just an example
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Feedback update error")
    @ExceptionHandler(DataAccessException.class)
    public void generalError(DataAccessException e) {
        System.out.println(e);
    }

    @PostMapping("/feedback")
    public void addFeedback(@Valid @RequestBody Feedback feedback) {
        service.persistFeedback(feedback);
    }

    @GetMapping("/feedback")
    public Feedback getFeedback() {
        Feedback demo = new Feedback();
        demo.setRating(0);
        return demo;
    }
}
