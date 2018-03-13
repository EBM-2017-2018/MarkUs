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
    "url": "/evaluations/:id/questions Récupère l'ensemble des questions d'une évaluation",
    "title": "* identifiée par son Id",
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
        "url": "http://localhost:4000/api/evaluations/:id/questions Récupère l'ensemble des questions d'une évaluation"
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
  }
] });
