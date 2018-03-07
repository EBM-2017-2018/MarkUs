define({ "api": [
  {
    "type": "get",
    "url": "/evaluations",
    "title": "Récupère la liste de toutes les évaluations",
    "name": "GetEvaluations",
    "group": "Evaluations",
    "description": "<p>Cette URL renvoit un JSON contenant toutes les évaluations créées.</p> <p>Les informations requises actuellement est juste le champs &quot;name&quot; de l'évaluations.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   H[\n{\n    \"date\": \"2018-03-07T13:31:24.528Z\",\n    \"questions\": [],\n    \"_id\": \"5a9fe9ac7dce47135f250cac\",\n    \"name\": \"Evaluation 1\",\n    \"__v\": 0\n},\n{\n    \"date\": \"2018-03-07T13:31:29.728Z\",\n    \"questions\": [],\n    \"_id\": \"5a9fe9b17dce47135f250cad\",\n    \"name\": \"Evaluation 2\",\n    \"__v\": 0\n}\n]",
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
    "type": "get",
    "url": "/",
    "title": "Hello World",
    "name": "GetHome",
    "group": "Static_Pages",
    "description": "<p>Cette URL affiche un simple message Hello World</p> <p>Il est possible d'écrire des messages sur plusieurs lignes dans la description.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHello, World!",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/index.js",
    "groupTitle": "Static_Pages",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/:name",
    "title": "Say hello to a specific name",
    "name": "GetName",
    "group": "Static_Pages",
    "description": "<p>Cette URL affiche un message Hello personnalisé</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la personne à saluer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "name: Nymous",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHello, Nymous!",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/index.js",
    "groupTitle": "Static_Pages",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/:name"
      }
    ]
  }
] });
