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
          "content": "{\n    \"date\": \"2018-03-07T16:01:01.994Z\",\n    \"questions\": [],\n    \"_id\": \"5aa00cbddfc165256122dccc\",\n    \"name\": \"Une évaluation particulière\",\n    \"author\":\"un prof\",\n    \"promo\": \"Un ensemble d'étudiant\",\n    \"__v\": 0\n  }",
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
          "content": "[\n{\n     \"date\": \"2018-03-07T13:31:24.528Z\",\n     \"questions\": [],\n     \"_id\": \"5a9fe9ac7dce47135f250cac\",\n     \"name\": \"Evaluation 1\",\n     \"author\": \"prof\",\n     \"promo\":\"une promo\",\n     \"__v\": 0\n },\n {\n     \"date\": \"2018-03-07T13:31:29.728Z\",\n     \"questions\": [],\n     \"_id\": \"5a9fe9b17dce47135f250cad\",\n     \"name\": \"Evaluation 2\",\n      \"author\": \"prof\",\n     \"promo\":\"une promo\",\n     \"__v\": 0\n }\n ]",
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
            "field": "promo",
            "description": "<p>groupe d'élèves visé par l'évaluation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>username de l'auteur</p>"
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
          "content": "{\nname: \"Nouvelle éval\",\npromo: \"EBM_17_18\",\nquestions: [\n{ content:\"Est-ce une question ?\",\n  points : 3,\n  format : \"checkboxes\"\n},\n{ content:\"Est-ce une autre question ?\",\n  points : 2\n}],\n\"author\":\"TB\"\n}",
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
            "field": "promo",
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
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>identifiant de l'auteur de l'évalutation</p>"
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
          "content": "{\nname: \"Nouvelle éval\",\npromo: \"EBM_17_18\",\nauthor:\"professeur\",\nquestions: [\n{ content:\"Est-ce une question ?\",\n  points : 3,\n  format : \"checkboxes\"\n},\n{ content:\"Est-ce une autre question ?\",\n  points : 2\n}]\n},\npublished : true",
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
    "type": "delete",
    "url": "/feedbacks/:id",
    "title": "Supprime un feedback identifié par son Id",
    "name": "DeleteFeedbackById",
    "group": "Feedbacks",
    "description": "<p>Supprime le feedback identifié par son Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID du feedback</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5aa00cbddfc165256122dccc,",
          "type": "string"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/feedbacks/index.js",
    "groupTitle": "Feedbacks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/feedbacks/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/feedbacks",
    "title": "Crée un feedback",
    "name": "DeleteFeedbackById",
    "group": "Feedbacks",
    "description": "<p>Crée un feedback</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "evaluationId",
            "description": "<p>ID de l'évaluation associée au feedback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionId",
            "description": "<p>ID de la question associée au feedback</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "points",
            "description": "<p>nombre de points associés à ce feedback</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>intitulé du feedback</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\nevaluationId: '5aa00cbddfc165256122dccc',\nquestionId: '5aa00cbddfc165256122dccc',\npoints: 2,\ncontent: 'Commentaire sur la réponse',\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/feedbacks/index.js",
    "groupTitle": "Feedbacks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/feedbacks"
      }
    ]
  },
  {
    "type": "get",
    "url": "/feedbacks/:id",
    "title": "Récupère un feedback identifié par son Id",
    "name": "GetFeedbackById",
    "group": "Feedbacks",
    "description": "<p>Renvoie le feedback demandé par Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID du feedback</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 5aa00cbddfc165256122dccc,",
          "type": "string"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/feedbacks/index.js",
    "groupTitle": "Feedbacks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/feedbacks/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/evaluations/:id/questions/:qid/feedback",
    "title": "Récupère les feedbacks associés à une question identifiée par son Id",
    "name": "GetFeedbacksByQuestionId",
    "group": "Feedbacks",
    "description": "<p>Une requête qui renvoit une liste de feedback pour une question donnée identifiée par son Id pour une évaluation donnée identifiée par son Id</p>",
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
            "description": "<p>ID de la question dont il faut renvoyer les feedbacks</p>"
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
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Feedbacks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations/:id/questions/:qid/feedback"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/papers/:id",
    "title": "Supprime une copie identifiée par Id",
    "name": "DeletePaperById",
    "group": "Papers",
    "description": "<p>Route permettant de supprimer une copie identifiée par son ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la copie à supprimer</p>"
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
          "content": "{\n    \"message\": \"copie supprimée\"\n  }",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/papers/index.js",
    "groupTitle": "Papers",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/papers/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/papers/:id",
    "title": "Récupèrer une copiepar Id",
    "name": "GetPaperById",
    "group": "Papers",
    "description": "<p>Une requête qui renvoit un objet au format JSON correspondant à la copie demandée</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la copie à afficher</p>"
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
    "version": "0.0.0",
    "filename": "src/api/papers/index.js",
    "groupTitle": "Papers",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/papers/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/papers",
    "title": "Récupèrer la liste de toutes les copies",
    "name": "GetPapers",
    "group": "Papers",
    "description": "<p>Cette requête renvoit un objet au format JSON contenant toutes les copies existantes</p>",
    "version": "0.0.0",
    "filename": "src/api/papers/index.js",
    "groupTitle": "Papers",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/papers"
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
    "type": "post",
    "url": "/papers",
    "title": "Créer une nouvelle copie",
    "name": "PostPaper",
    "group": "Papers",
    "description": "<p>Crée une nouvelle évaluation dans la base de donnée.</p> <p>La réponse est l'objet créée.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la copie à afficher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "evaluationId",
            "description": "<p>ID de l'évaluation associée à la copie</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>username de l'auteur de la copie</p>"
          },
          {
            "group": "Parameter",
            "type": "[Responses]",
            "optional": true,
            "field": "response",
            "description": "<p>tableau de réponses de l'évaluation. Si absent, sera initialisé vide. Une question dont le format ne sera pas précisé aura par défaut un format &quot;textarea&quot;.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/papers/index.js",
    "groupTitle": "Papers",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/papers"
      }
    ]
  },
  {
    "type": "put",
    "url": "/papers/:id",
    "title": "Modifier une évaluation",
    "name": "UpdatePaper",
    "group": "Papers",
    "description": "<p>Modifie une copie</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la copie à afficher</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "responses",
            "description": "<p>tableau de réponses</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "corrected",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/papers/index.js",
    "groupTitle": "Papers",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/papers/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/evaluations/:id/questions/:qid",
    "title": "Supprime une question identifiée par id",
    "name": "DeleteQuestion",
    "group": "Questions",
    "description": "<p>Une requête qui supprime une question dans une évaluation donnée</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de l'évaluation pour laquelle il faut supprimer la question</p>"
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
  },
  {
    "type": "delete",
    "url": "/papers/:id/responses/:rid",
    "title": "Supprime une réponse identifiée par id",
    "name": "DeleteResponse",
    "group": "Responses",
    "description": "<p>Une requête qui supprime une réponse dans une copie donnée</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la copie pour laquelle il faut supprimer la réponse</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qid",
            "description": "<p>ID de la réponse à supprimer</p>"
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
          "content": "{ message : \"la réponse a été supprimé }",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/papers/index.js",
    "groupTitle": "Responses",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/papers/:id/responses/:rid"
      }
    ]
  },
  {
    "type": "get",
    "url": "/papers/:id/responses/:rid",
    "title": "Récupère une réponse identifiée par son Id",
    "name": "GetResponseById",
    "group": "Responses",
    "description": "<p>Une requête qui renvoit une réponse donnée identifiée par son Id pour une copie donnée identifiée par son Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la copie dont il faut renvoyer la réponse</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rid",
            "description": "<p>ID de la réponse</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/papers/index.js",
    "groupTitle": "Responses",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/papers/:id/responses/:rid"
      }
    ]
  },
  {
    "type": "get",
    "url": "/papers/:id/responses",
    "title": "Récupère l'ensemble des réponses d'une copie identifiée par son Id",
    "name": "GetResponsesByPaperId",
    "group": "Responses",
    "description": "<p>Une requête qui renvoit un tableau de réponses pour une copie donnée identifiée par son Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la copie dont il faut renvoyer les réponses</p>"
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
    "version": "0.0.0",
    "filename": "src/api/papers/index.js",
    "groupTitle": "Responses",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/papers/:id/responses"
      }
    ]
  },
  {
    "type": "get",
    "url": "/evaluations/:id/questions/:qid/responses",
    "title": "Récupère les réponses associées à une question identifiée par son Id",
    "name": "GetResponsesByQuestionId",
    "group": "Responses",
    "description": "<p>Une requête qui renvoit une liste de réponses pour une question donnée identifiée par son Id pour une évaluation donnée identifiée par son Id</p>",
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
            "description": "<p>ID de la question dont il faut renvoyer les réponses</p>"
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
    "version": "0.0.0",
    "filename": "src/api/evaluations/index.js",
    "groupTitle": "Responses",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/evaluations/:id/questions/:qid/responses"
      }
    ]
  },
  {
    "type": "post",
    "url": "/papers/:id/responses",
    "title": "Crée une réponse dans la copie donnée",
    "name": "PostResponse",
    "group": "Responses",
    "description": "<p>Une requête qui crée une réponse dans une copie donnée</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la copie pour laquelle il faut créer la réponse</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Intitulé de la réponse</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionId",
            "description": "<p>id de la question associée</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/papers/index.js",
    "groupTitle": "Responses",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/papers/:id/responses"
      }
    ]
  },
  {
    "type": "put",
    "url": "/papers/:id/responses/:rid",
    "title": "Modifie une réponse identifiée par son id",
    "name": "UpdateResponseById",
    "group": "Responses",
    "description": "<p>Cette route permet de modifier le contenu d'une réponse et/ou l'id du feedback associé</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la copie dont il faut modifier la réponse</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rid",
            "description": "<p>ID de la réponse</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>contenu de la réponse</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "feedbackId",
            "description": "<p>Id du feedback associé à cette réponse</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/papers/index.js",
    "groupTitle": "Responses",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/papers/:id/responses/:rid"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Renvoie les informations de l'user",
    "name": "GetUser",
    "group": "User",
    "description": "<p>Renvoie les infos de l'utilisateur mises à dispositions par LinkApp</p>",
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users"
      }
    ]
  }
] });