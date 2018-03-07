const BASE_URL = '/api';

export const getEvaluation = (evaluationId) => {
  const url = `${BASE_URL}/evaluations/${evaluationId}`;
  return fetch(url).then(response => response.json())
}

export const getEvaluations = () => {
  const url = `${BASE_URL}/evaluations`;
  return fetch(url).then(response => response.json())
}

export const createCopy = (evaluationId, authorId) => {
  return fetch(`${BASE_URL}/papers`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          evaluationId : evaluationId,
          author: authorId
        })
    }).then(res => res.json())
}

export const createEvaluation = (name) => {
  return fetch(`${BASE_URL}/evaluations`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          name : name,
          groupClass: 'groupClass'
        })
    }).then(res => res.json())
}

export const createQuestion = (evaluationId, content, points) => {
  return fetch(`${BASE_URL}/evaluations/${evaluationId}/questions`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          content : content,
          points: points
        })
    }).then(res => res.json())
}

export const updateCopy = (responses) => {
  return fetch(
    `${BASE_URL}/papers`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "UPDATE",
        body: JSON.stringify({
          responses: responses,
        })
    })
}

export const deleteEvaluation = (evaluationId) => {
  return fetch(
    `${BASE_URL}/evaluations/${evaluationId}`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
    })
}
