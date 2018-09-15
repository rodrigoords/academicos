Feature: I want to test base skeleton behavior

  Background:
    Given Request with Authorization Header:
      | headerName    | headerValue                        |
      | Authorization | Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl |

  Scenario: I want to make a get request on base path
    When I make a GET call to "/courses" endpoint
    Then response status code should be 200

  Scenario: I want to get all courses in my database
    Given I have the following rows in the "courses" table:
      | id | name                     |
      | 1  | Engenharia da computação |
      | 2  | Engenharia da eletrica   |
    When I make a GET call to "/courses" endpoint
    Then response status code should be 200
    And response should be json:
    """
    {
        "content": [
            {
                "createdDate": "${json-unit.ignore}",
                "lastModifiedDate": "${json-unit.ignore}",
                "id": 1,
                "name": "Engenharia da computação"
            },
            {
                "createdDate": "${json-unit.ignore}",
                "lastModifiedDate": "${json-unit.ignore}",
                "id": 2,
                "name": "Engenharia da eletrica"
            }
        ],
        "pageable": {
            "sort": {
                "sorted": false,
                "unsorted": true
            },
            "offset": 0,
            "pageSize": 20,
            "pageNumber": 0,
            "paged": true,
            "unpaged": false
        },
        "last": true,
        "totalPages": 1,
        "totalElements": 2,
        "size": 20,
        "number": 0,
        "first": true,
        "numberOfElements": 2,
        "sort": {
            "sorted": false,
            "unsorted": true
        }
    }
    """

  Scenario: I want to create a new course with api
    When I make a POST call to "/courses" endpoint with post body:
    """
    {
      "name": "Engenharia da computação"
    }
    """
    Then response status code should be 201
    And response should be json:
    """
    {
      "id": 1,
      "name": "Engenharia da computação",
      "createdDate": "${json-unit.ignore}",
      "lastModifiedDate": "${json-unit.ignore}"
    }
    """
    And I should have the following rows in the "courses" table:
      | id | name                     |
      | 1  | Engenharia da computação |

  Scenario: I want to link a course with subjects
    Given I have only the following rows in the "courses" table:
      | id | name                     |
      | 1  | Engenharia da computação |
      | 2  | Engenharia da eletrica   |
    And I have only the following rows in the "subjects" table:
      | id | name                  | observation                                       |
      | 1  | Sistemas Distribuidos | Aborda os desafios da comunicação entre sistemas. |
      | 2  | Fisíca II             |                                                   |
    When I make a POST call to "/courses/1/subjects" endpoint with post body:
      """
        [
          { "id": 1 },
          { "id": 2 }
        ]
      """
    Then response status code should be 204
    And I should have the following rows in any order in the "courses_subjects" table:
      | id_subject | id_course |
      | 1          | 1         |
      | 2          | 1         |

  Scenario: I want to delete a exists subject link
    Given I have only the following rows in the "courses" table:
      | id | name                     |
      | 1  | Engenharia da computação |
      | 2  | Engenharia da eletrica   |
    And I have only the following rows in the "subjects" table:
      | id | name                  | observation                                       |
      | 1  | Sistemas Distribuidos | Aborda os desafios da comunicação entre sistemas. |
      | 2  | Fisíca II             |                                                   |
    And I have only the following rows in the "courses_subjects" table:
      | id_subject | id_course | $no_dates |
      | 1          | 1         | null      |
      | 2          | 1         | null      |
    When I make a DELETE call to "/courses/1/subjects/1" endpoint
    Then response status code should be 204
    And I should have the following rows in the "courses" table:
      | id | name                     |
      | 1  | Engenharia da computação |
      | 2  | Engenharia da eletrica   |
    And I should have the following rows in the "subjects" table:
      | id | name                  | observation                                       |
      | 1  | Sistemas Distribuidos | Aborda os desafios da comunicação entre sistemas. |
      | 2  | Fisíca II             |                                                   |
    And I should have the following rows in the "courses_subjects" table:
      | id_subject | id_course |
      | 2          | 1         |

    Scenario: I want to get all linked subjects
      Given I have only the following rows in the "courses" table:
        | id | name                     |
        | 1  | Engenharia da computação |
        | 2  | Engenharia da eletrica   |
      And I have only the following rows in the "subjects" table:
        | id | name                  | observation                                       |
        | 1  | Sistemas Distribuidos | Aborda os desafios da comunicação entre sistemas. |
        | 2  | Fisíca II             |                                                   |
      And I have only the following rows in the "courses_subjects" table:
        | id_subject | id_course | $no_dates |
        | 1          | 1         | null      |
        | 2          | 1         | null      |
        | 2          | 2         | null      |
      When I make a GET call to "/courses/1/subjects" endpoint
      Then response status code should be 200
      And response should be json:
      """
      [
          {
              "createdDate": "${json-unit.ignore}",
              "lastModifiedDate": "${json-unit.ignore}",
              "id": 1,
              "name": "Sistemas Distribuidos",
              "observation": "Aborda os desafios da comunicação entre sistemas."
          },
          {
              "createdDate": "${json-unit.ignore}",
              "lastModifiedDate": "${json-unit.ignore}",
              "id": 2,
              "name": "Fisíca II",
              "observation": ""
          }
      ]
      """
