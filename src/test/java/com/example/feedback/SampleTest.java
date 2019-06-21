package com.example.feedback;

import com.intuit.karate.junit5.Karate;

class SampleTest {

    @Karate.Test
    Karate testGetFeedback() {
        return new Karate().feature("get-feedback").relativeTo(getClass());
    }

    @Karate.Test
    Karate testPostFeedback() {
        return new Karate().feature("post-feedback").relativeTo(getClass());
    }

}
