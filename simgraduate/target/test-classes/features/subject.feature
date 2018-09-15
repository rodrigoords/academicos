Feature: I want to test base skeleton behavior

  Background:
    Given Request with Authorization Header:
      | headerName    | headerValue                        |
      | Authorization | Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl |

  Scenario: I want to make a get request on base path
    When I make a GET call to "/subjects" endpoint
    Then response status code should be 200

  Scenario: I want to create a new subject with api
    When I make a POST call to "/subjects" endpoint with post body:
    """
    {
      "name": "Sistemas Distribuidos",
      "observation": "Aborda os desafios da comunicação entre sistemas."
    }
    """
    Then response status code should be 201
    And response should be json:
    """
    {
      "id": 1,
      "name": "Sistemas Distribuidos",
      "observation": "Aborda os desafios da comunicação entre sistemas.",
      "createdDate": "${json-unit.ignore}",
      "lastModifiedDate": "${json-unit.ignore}"
    }
    """
    And I should have the following rows in the "subjects" table:
      | id | name                  | observation                                       |
      | 1  | Sistemas Distribuidos | Aborda os desafios da comunicação entre sistemas. |

  Scenario: I want to get all topics
    Given I have only the following rows in the "subjects" table:
      | id | name                          | observation                                       |
      | 1  | Sistemas Distribuidos         | Aborda os desafios da comunicação entre sistemas. |
      | 2  | Computação de alto desempenho | Entenda as threads e os super computadores        |
    And I have only the following rows in the "topics" table:
      | id | name    | description                            | id_subject |
      | 1  | RPC     |                                        | 1          |
      | 2  | CLOUD   | let's talk about all new cloud feature | 1          |
      | 3  | Threads |                                        | 2          |
    When I make a GET call to "/subjects/1/topics" endpoint
    Then response status code should be 200
    And response should be json:
    """
    [
        {
            "createdDate": "${json-unit.ignore}",
            "lastModifiedDate": "${json-unit.ignore}",
            "id": 1,
            "name": "RPC",
            "description": ""
        },
        {
            "createdDate": "${json-unit.ignore}",
            "lastModifiedDate": "${json-unit.ignore}",
            "id": 2,
            "name": "CLOUD",
            "description": "let's talk about all new cloud feature"
        }
    ]
    """