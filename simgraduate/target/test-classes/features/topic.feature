Feature: I want to test base skeleton behavior

  Background:
    Given Request with Authorization Header:
      | headerName    | headerValue                        |
      | Authorization | Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl |

  Scenario: I want to make a get request on base path
    When I make a GET call to "/topics" endpoint
    Then response status code should be 200

  Scenario: I want to create a new topic with api
    Given I have the following rows in the "subjects" table:
      | id | name                  | observation |
      | 1  | Sistemas distribuidos |             |

    When I make a POST call to "/topics" endpoint with post body:
    """
    {
      "subject": { "id": 1 },
      "name": "RPC",
      "description": "let's talk about some procedures remote call methods and compare then."
    }
    """
    Then response status code should be 201
    And response should be json:
    """
    {
      "id": 1,
      "subject": {
        "id": 1,
        "name": null,
        "observation": null,
        "createdDate": null,
        "lastModifiedDate": null
       },
      "name": "RPC",
      "description": "let's talk about some procedures remote call methods and compare then.",
      "createdDate": "${json-unit.ignore}",
      "lastModifiedDate": "${json-unit.ignore}"
    }
    """
    And I should have the following rows in the "topics" table:
      | id | name | description                                                            | id_subject |
      | 1  | RPC  | let's talk about some procedures remote call methods and compare then. | 1          |