$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("courses.feature");
formatter.feature({
  "line": 1,
  "name": "I want to test base skeleton behavior",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "I want to make a get request on base path",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-make-a-get-request-on-base-path",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I make a GET call to \"/courses\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "I want to get all courses in my database",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-get-all-courses-in-my-database",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I have the following rows in the \"courses\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ],
      "line": 14
    },
    {
      "cells": [
        "1",
        "Engenharia da computação"
      ],
      "line": 15
    },
    {
      "cells": [
        "2",
        "Engenharia da eletrica"
      ],
      "line": 16
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I make a GET call to \"/courses\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "response should be json:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 20,
    "value": "{\n    \"content\": [\n        {\n            \"createdDate\": \"${json-unit.ignore}\",\n            \"lastModifiedDate\": \"${json-unit.ignore}\",\n            \"id\": 1,\n            \"name\": \"Engenharia da computação\"\n        },\n        {\n            \"createdDate\": \"${json-unit.ignore}\",\n            \"lastModifiedDate\": \"${json-unit.ignore}\",\n            \"id\": 2,\n            \"name\": \"Engenharia da eletrica\"\n        }\n    ],\n    \"pageable\": {\n        \"sort\": {\n            \"sorted\": false,\n            \"unsorted\": true\n        },\n        \"offset\": 0,\n        \"pageSize\": 20,\n        \"pageNumber\": 0,\n        \"paged\": true,\n        \"unpaged\": false\n    },\n    \"last\": true,\n    \"totalPages\": 1,\n    \"totalElements\": 2,\n    \"size\": 20,\n    \"number\": 0,\n    \"first\": true,\n    \"numberOfElements\": 2,\n    \"sort\": {\n        \"sorted\": false,\n        \"unsorted\": true\n    }\n}"
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 61,
  "name": "I want to create a new course with api",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-create-a-new-course-with-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "I make a POST call to \"/courses\" endpoint with post body:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 63,
    "value": "{\n  \"name\": \"Engenharia da computação\"\n}"
  }
});
formatter.step({
  "line": 68,
  "name": "response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "response should be json:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 70,
    "value": "{\n  \"id\": 1,\n  \"name\": \"Engenharia da computação\",\n  \"createdDate\": \"${json-unit.ignore}\",\n  \"lastModifiedDate\": \"${json-unit.ignore}\"\n}"
  }
});
formatter.step({
  "line": 78,
  "name": "I should have the following rows in the \"courses\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ],
      "line": 79
    },
    {
      "cells": [
        "1",
        "Engenharia da computação"
      ],
      "line": 80
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 82,
  "name": "I want to link a course with subjects",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-link-a-course-with-subjects",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 83,
  "name": "I have only the following rows in the \"courses\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ],
      "line": 84
    },
    {
      "cells": [
        "1",
        "Engenharia da computação"
      ],
      "line": 85
    },
    {
      "cells": [
        "2",
        "Engenharia da eletrica"
      ],
      "line": 86
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I have only the following rows in the \"subjects\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "observation"
      ],
      "line": 88
    },
    {
      "cells": [
        "1",
        "Sistemas Distribuidos",
        "Aborda os desafios da comunicação entre sistemas."
      ],
      "line": 89
    },
    {
      "cells": [
        "2",
        "Fisíca II",
        ""
      ],
      "line": 90
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I make a POST call to \"/courses/1/subjects\" endpoint with post body:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 92,
    "value": "  [\n    { \"id\": 1 },\n    { \"id\": 2 }\n  ]"
  }
});
formatter.step({
  "line": 98,
  "name": "response status code should be 204",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "I should have the following rows in any order in the \"courses_subjects\" table:",
  "rows": [
    {
      "cells": [
        "id_subject",
        "id_course"
      ],
      "line": 100
    },
    {
      "cells": [
        "1",
        "1"
      ],
      "line": 101
    },
    {
      "cells": [
        "2",
        "1"
      ],
      "line": 102
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 104,
  "name": "I want to delete a exists subject link",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-delete-a-exists-subject-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 105,
  "name": "I have only the following rows in the \"courses\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ],
      "line": 106
    },
    {
      "cells": [
        "1",
        "Engenharia da computação"
      ],
      "line": 107
    },
    {
      "cells": [
        "2",
        "Engenharia da eletrica"
      ],
      "line": 108
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "I have only the following rows in the \"subjects\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "observation"
      ],
      "line": 110
    },
    {
      "cells": [
        "1",
        "Sistemas Distribuidos",
        "Aborda os desafios da comunicação entre sistemas."
      ],
      "line": 111
    },
    {
      "cells": [
        "2",
        "Fisíca II",
        ""
      ],
      "line": 112
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I have only the following rows in the \"courses_subjects\" table:",
  "rows": [
    {
      "cells": [
        "id_subject",
        "id_course",
        "$no_dates"
      ],
      "line": 114
    },
    {
      "cells": [
        "1",
        "1",
        "null"
      ],
      "line": 115
    },
    {
      "cells": [
        "2",
        "1",
        "null"
      ],
      "line": 116
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I make a DELETE call to \"/courses/1/subjects/1\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "response status code should be 204",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "I should have the following rows in the \"courses\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ],
      "line": 120
    },
    {
      "cells": [
        "1",
        "Engenharia da computação"
      ],
      "line": 121
    },
    {
      "cells": [
        "2",
        "Engenharia da eletrica"
      ],
      "line": 122
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I should have the following rows in the \"subjects\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "observation"
      ],
      "line": 124
    },
    {
      "cells": [
        "1",
        "Sistemas Distribuidos",
        "Aborda os desafios da comunicação entre sistemas."
      ],
      "line": 125
    },
    {
      "cells": [
        "2",
        "Fisíca II",
        ""
      ],
      "line": 126
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I should have the following rows in the \"courses_subjects\" table:",
  "rows": [
    {
      "cells": [
        "id_subject",
        "id_course"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "1"
      ],
      "line": 129
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 131,
  "name": "I want to get all linked subjects",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-get-all-linked-subjects",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 132,
  "name": "I have only the following rows in the \"courses\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ],
      "line": 133
    },
    {
      "cells": [
        "1",
        "Engenharia da computação"
      ],
      "line": 134
    },
    {
      "cells": [
        "2",
        "Engenharia da eletrica"
      ],
      "line": 135
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "I have only the following rows in the \"subjects\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "observation"
      ],
      "line": 137
    },
    {
      "cells": [
        "1",
        "Sistemas Distribuidos",
        "Aborda os desafios da comunicação entre sistemas."
      ],
      "line": 138
    },
    {
      "cells": [
        "2",
        "Fisíca II",
        ""
      ],
      "line": 139
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I have only the following rows in the \"courses_subjects\" table:",
  "rows": [
    {
      "cells": [
        "id_subject",
        "id_course",
        "$no_dates"
      ],
      "line": 141
    },
    {
      "cells": [
        "1",
        "1",
        "null"
      ],
      "line": 142
    },
    {
      "cells": [
        "2",
        "1",
        "null"
      ],
      "line": 143
    },
    {
      "cells": [
        "2",
        "2",
        "null"
      ],
      "line": 144
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I make a GET call to \"/courses/1/subjects\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "response should be json:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 148,
    "value": "[\n    {\n        \"createdDate\": \"${json-unit.ignore}\",\n        \"lastModifiedDate\": \"${json-unit.ignore}\",\n        \"id\": 1,\n        \"name\": \"Sistemas Distribuidos\",\n        \"observation\": \"Aborda os desafios da comunicação entre sistemas.\"\n    },\n    {\n        \"createdDate\": \"${json-unit.ignore}\",\n        \"lastModifiedDate\": \"${json-unit.ignore}\",\n        \"id\": 2,\n        \"name\": \"Fisíca II\",\n        \"observation\": \"\"\n    }\n]"
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("subject.feature");
formatter.feature({
  "line": 1,
  "name": "I want to test base skeleton behavior",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "I want to make a get request on base path",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-make-a-get-request-on-base-path",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I make a GET call to \"/subjects\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "I want to create a new subject with api",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-create-a-new-subject-with-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I make a POST call to \"/subjects\" endpoint with post body:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "{\n  \"name\": \"Sistemas Distribuidos\",\n  \"observation\": \"Aborda os desafios da comunicação entre sistemas.\"\n}"
  }
});
formatter.step({
  "line": 20,
  "name": "response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "response should be json:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 22,
    "value": "{\n  \"id\": 1,\n  \"name\": \"Sistemas Distribuidos\",\n  \"observation\": \"Aborda os desafios da comunicação entre sistemas.\",\n  \"createdDate\": \"${json-unit.ignore}\",\n  \"lastModifiedDate\": \"${json-unit.ignore}\"\n}"
  }
});
formatter.step({
  "line": 31,
  "name": "I should have the following rows in the \"subjects\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "observation"
      ],
      "line": 32
    },
    {
      "cells": [
        "1",
        "Sistemas Distribuidos",
        "Aborda os desafios da comunicação entre sistemas."
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 35,
  "name": "I want to get all topics",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-get-all-topics",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I have only the following rows in the \"subjects\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "observation"
      ],
      "line": 37
    },
    {
      "cells": [
        "1",
        "Sistemas Distribuidos",
        "Aborda os desafios da comunicação entre sistemas."
      ],
      "line": 38
    },
    {
      "cells": [
        "2",
        "Computação de alto desempenho",
        "Entenda as threads e os super computadores"
      ],
      "line": 39
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I have only the following rows in the \"topics\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "description",
        "id_subject"
      ],
      "line": 41
    },
    {
      "cells": [
        "1",
        "RPC",
        "",
        "1"
      ],
      "line": 42
    },
    {
      "cells": [
        "2",
        "CLOUD",
        "let\u0027s talk about all new cloud feature",
        "1"
      ],
      "line": 43
    },
    {
      "cells": [
        "3",
        "Threads",
        "",
        "2"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I make a GET call to \"/subjects/1/topics\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "response should be json:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 48,
    "value": "[\n    {\n        \"createdDate\": \"${json-unit.ignore}\",\n        \"lastModifiedDate\": \"${json-unit.ignore}\",\n        \"id\": 1,\n        \"name\": \"RPC\",\n        \"description\": \"\"\n    },\n    {\n        \"createdDate\": \"${json-unit.ignore}\",\n        \"lastModifiedDate\": \"${json-unit.ignore}\",\n        \"id\": 2,\n        \"name\": \"CLOUD\",\n        \"description\": \"let\u0027s talk about all new cloud feature\"\n    }\n]"
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("topic.feature");
formatter.feature({
  "line": 1,
  "name": "I want to test base skeleton behavior",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "I want to make a get request on base path",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-make-a-get-request-on-base-path",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I make a GET call to \"/topics\" endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Request with Authorization Header:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 5
    },
    {
      "cells": [
        "Authorization",
        "Basic c2ltZ3JhZHVhdGU6YnJhc2lsSHVl"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "I want to create a new topic with api",
  "description": "",
  "id": "i-want-to-test-base-skeleton-behavior;i-want-to-create-a-new-topic-with-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I have the following rows in the \"subjects\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "observation"
      ],
      "line": 14
    },
    {
      "cells": [
        "1",
        "Sistemas distribuidos",
        ""
      ],
      "line": 15
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I make a POST call to \"/topics\" endpoint with post body:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 18,
    "value": "{\n  \"subject\": { \"id\": 1 },\n  \"name\": \"RPC\",\n  \"description\": \"let\u0027s talk about some procedures remote call methods and compare then.\"\n}"
  }
});
formatter.step({
  "line": 25,
  "name": "response status code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "response should be json:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 27,
    "value": "{\n  \"id\": 1,\n  \"subject\": {\n    \"id\": 1,\n    \"name\": null,\n    \"observation\": null,\n    \"createdDate\": null,\n    \"lastModifiedDate\": null\n   },\n  \"name\": \"RPC\",\n  \"description\": \"let\u0027s talk about some procedures remote call methods and compare then.\",\n  \"createdDate\": \"${json-unit.ignore}\",\n  \"lastModifiedDate\": \"${json-unit.ignore}\"\n}"
  }
});
formatter.step({
  "line": 43,
  "name": "I should have the following rows in the \"topics\" table:",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "description",
        "id_subject"
      ],
      "line": 44
    },
    {
      "cells": [
        "1",
        "RPC",
        "let\u0027s talk about some procedures remote call methods and compare then.",
        "1"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});