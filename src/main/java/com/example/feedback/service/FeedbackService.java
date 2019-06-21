package com.example.feedback.service;

import com.example.feedback.model.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.dao.DataAccessException;

@Service
public class FeedbackService {
    @Autowired
    private JdbcTemplate template;

    /**
    * Persists a Feedback object to a postgres database
    *
    * @param feedback Feedback Object you wish to persist
    */
    public void persistFeedback(Feedback feedback) throws DataAccessException {
        String sql = "insert into feedback (rating, category, body) values (?, ?, ?)";
        template.update(sql, feedback.getRating(), feedback.getCategory(), feedback.getBody());
    }
}
