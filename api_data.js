define({ "api": [
  {
    "type": "delete",
    "url": "/evaluations/:id",
    "title": "Supprime une évaluation identifiée par Id",
    "name": "DeleteEvaluationById",
    "group": "Evaluations",
    "description": "<p>Route permettant de supprimer une évaluation identifiée par son ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'évaluation à supprimer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5aa00cbddfc165256122dccc",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"evaluation supprimée\"\n  }",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Evaluations",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/evaluations/:id",
    "title": "Récupèrer une évaluation par Id",
    "name": "GetEvaluationById",
    "group": "Evaluations",
    "description": "<p>Une requête qui renvoit un objet au format JSON correspondant à l'évaluation demandée</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'évaluation à afficher</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5aa00cbddfc165256122dccc",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"date\": \"2018-03-07T16:01:01.994Z\",\n    \"questions\": [],\n    \"_id\": \"5aa00cbddfc165256122dccc\",\n    \"name\": \"Une évaluation particulière\",\n    \"groupClass\": \"Un ensemble d'étudiant\",\n    \"__v\": 0\n  }",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Evaluations",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/evaluations",
    "title": "Récupèrer la liste de toutes les évaluations",
    "name": "GetEvaluations",
    "group": "Evaluations",
    "description": "<p>Cette requête renvoit un objet au format JSON contenant toutes les évaluations existantes</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n     \"date\": \"2018-03-07T13:31:24.528Z\",\n     \"questions\": [],\n     \"_id\": \"5a9fe9ac7dce47135f250cac\",\n     \"name\": \"Evaluation 1\",\n     \"__v\": 0\n },\n {\n     \"date\": \"2018-03-07T13:31:29.728Z\",\n     \"questions\": [],\n     \"_id\": \"5a9fe9b17dce47135f250cad\",\n     \"name\": \"Evaluation 2\",\n     \"__v\": 0\n }\n ]",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Evaluations",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations"
      }
    ]
  },
  {
    "type": "post",
    "url": "/evaluations",
    "title": "Créer une nouvelle évaluation",
    "name": "PostEvaluation",
    "group": "Evaluations",
    "description": "<p>Crée une nouvelle évaluation dans la base de donnée.</p> <p>La réponse est l'objet créée.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>nom de l'évaluation à insérer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupClass",
            "description": "<p>groupe d'élèves visé par l'évaluation</p>"
          },
          {
            "group": "Parameter",
            "type": "[Questions]",
            "optional": true,
            "field": "questions",
            "description": "<p>tableau de questions de l'évaluation. Si absent, sera initialisé vide. Une question dont le format ne sera pas précisé aura par défaut un format &quot;textarea&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\nname: \"Nouvelle éval\",\ngroupClass: \"EBM_17_18\",\nquestions: [\n{ content:\"Est-ce une question ?\",\n  points : 3,\n  format : \"checkboxes\"\n},\n{ content:\"Est-ce une autre question ?\",\n  points : 2\n}]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"Nouvelle éval\",\n    \"date\": \"2018-03-07T15:03:15.087Z\",\n    \"questions\": [],\n    \"_id\": \"5a9fff33ed2a281dcecbbd85\",\n    \"__v\": 0\n   }",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Evaluations",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations"
      }
    ]
  },
  {
    "type": "put",
    "url": "/evaluations/:id",
    "title": "Modifier une évaluation",
    "name": "UpdateEvaluation",
    "group": "Evaluations",
    "description": "<p>Modifie une évaluation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>nom de l'évaluation à insérer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupClass",
            "description": "<p>groupe d'élèves visé par l'évaluation</p>"
          },
          {
            "group": "Parameter",
            "type": "[Questions]",
            "optional": true,
            "field": "questions",
            "description": "<p>tableau de questions de l'évaluation. Si absent, sera initialisé vide. Une question dont le format ne sera pas précisé aura par défaut un format &quot;textarea&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "published",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\nname: \"Nouvelle éval\",\ngroupClass: \"EBM_17_18\",\nquestions: [\n{ content:\"Est-ce une question ?\",\n  points : 3,\n  format : \"checkboxes\"\n},\n{ content:\"Est-ce une autre question ?\",\n  points : 2\n}]\n},\npublished : true",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Evaluations",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/evaluations/:id/papers",
    "title": "Récupère l'ensemble des copies associées à une évaluation identifiée par son Id",
    "name": "GetPapersByEvaluationId",
    "group": "Papers",
    "description": "<p>Une requête qui renvoit un tableau de copies pour une évaluation donnée identifiée par son Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'évaluation dont il faut renvoyer les copies</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5aa00cbddfc165256122dccc",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n     \"date\": \"2018-03-13T08:00:09.084Z\",\n     \"responses\": [],\n     \"corrected\": false,\n     \"_id\": \"5aa78509d25158676fd19935\",\n     \"evaluationId\": \"5aa784bcd25158676fd19934\",\n     \"author\": \"author\",\n     \"__v\": 0\n },\n {\n     \"date\": \"2018-03-13T08:00:11.472Z\",\n     \"responses\": [],\n     \"corrected\": false,\n     \"_id\": \"5aa7850bd25158676fd19936\",\n     \"evaluationId\": \"5aa784bcd25158676fd19934\",\n     \"author\": \"author\",\n     \"__v\": 0\n },\n ]",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Papers",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations/:id/papers"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/evaluations/:id/questions/:qid",
    "title": "Supprime une question identifiée par id",
    "name": "DeleteQuestion",
    "group": "Questions",
    "description": "<p>Une requête qui crée une question dans une évaluation donnée</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'évaluation pour laquelle il faut créer la question</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qid",
            "description": "<p>ID de la question à supprimer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5aa00cbddfc165256122dccc,\nqid: 5aa00cbddfc165256122dccc",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ message : \"la question a été supprimé }",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations/:id/questions/:qid"
      }
    ]
  },
  {
    "type": "get",
    "url": "/evaluations/:id/questions/:qid",
    "title": "Récupère une question identifiée par son Id",
    "name": "GetQuestionById",
    "group": "Questions",
    "description": "<p>Une requête qui renvoit question donnée identifiée par son Id pour une évaluation donnée identifiée par son Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'évaluation dont il faut renvoyer la question</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qid",
            "description": "<p>ID de la question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5aa00cbddfc165256122dccc\nqid: 5aa00cbddfc165256122dccc",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"format\": \"textarea\",\n    \"content\": \"questions\",\n    \"points\": 2,\n    \"_id\": \"5aa789b5ef45226bfff41a2a\"\n}",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations/:id/questions/:qid"
      }
    ]
  },
  {
    "type": "get",
    "url": "/evaluations/:id/questions",
    "title": "Récupère l'ensemble des questions d'une évaluation identifiée par son Id",
    "name": "GetQuestionsByEvaluationId",
    "group": "Questions",
    "description": "<p>Une requête qui renvoit un tableau de questions pour une évaluation donnée identifiée par son Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'évaluation dont il faut renvoyer les questions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5aa00cbddfc165256122dccc",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n     \"format\": \"textarea\",\n     \"content\": \"questions\",\n     \"points\": 2,\n     \"_id\": \"5aa789b5ef45226bfff41a29\"\n },\n {\n     \"format\": \"textarea\",\n     \"content\": \"questions\",\n     \"points\": 2,\n     \"_id\": \"5aa789b5ef45226bfff41a2a\"\n },\n ]",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations/:id/questions"
      }
    ]
  },
  {
    "type": "post",
    "url": "/evaluations/:id/questions",
    "title": "Crée une question dans l'évaluation donnée",
    "name": "PostQuestion",
    "group": "Questions",
    "description": "<p>Une requête qui crée une question dans une évaluation donnée</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'évaluation pour laquelle il faut créer la question</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Intitulé de la question</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "points",
            "description": "<p>Nombre de points attribué à cette question</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "format",
            "description": "<p>Format de la question (textarea, checkboxes, ...). &quot;textarea&quot; par défaut</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  id: 5aa00cbddfc165256122dccc,\n  body:{\n    content:\"Est-ce une question ?\",\n    points: 3,\n    format: \"checkboxes\"\n  },\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"format\":\"textarea\",\n    \"content\": \"questions\",\n    \"points\": 2\n}",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations/:id/questions"
      }
    ]
  }
] });
