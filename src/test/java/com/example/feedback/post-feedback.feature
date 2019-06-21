Feature: post-feedback

  Scenario: User uploads valid feedback
    Given url 'http://localhost:8080/feedback'
    And request {rating: 1, body: 'Testing', category: 'general'}
    When method POST
    Then status 200

  Scenario: User uploads valid feedback without body or category
    Given url 'http://localhost:8080/feedback'
    And request {rating: 1}
    When method POST
    Then status 200

  Scenario: User uploads invalid feedback without rating
    Given url 'http://localhost:8080/feedback'
    And request {body: 'Testing', category: 'general'}
    When method POST
    Then status 400

