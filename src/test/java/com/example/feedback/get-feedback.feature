Feature: get-feedback

  Scenario: User requests a feedback object
    Given url 'http://localhost:8080/feedback'
    When method GET
    Then status 200
    And match response == {category: '#null', body: '#null', rating: #number}
