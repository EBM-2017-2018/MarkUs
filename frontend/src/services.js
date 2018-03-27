
import { checkAuthResponse, getAuthHeaders } from 'ebm-auth/dist/browser';
const BASE_URL = '/api';

export const getEvaluation = (evaluationId) => {
  const url = `${BASE_URL}/evaluations/${evaluationId}`;
  return fetch(url, { headers: getAuthHeaders() })
        .then(checkAuthResponse)
        .then(response => response.json())
}

export const getEvaluations = () => {
  const url = `${BASE_URL}/evaluations`;
  return fetch(url, { headers: getAuthHeaders() })
          .then(console.log(getAuthHeaders()))
          .then(checkAuthResponse)
          .then(response => response.json())
}

export const createCopy = (evaluationId, authorId) => {
  return fetch(`${BASE_URL}/papers`, {
        headers: getAuthHeaders(),
        method: 'POST',
        body: JSON.stringify({
          evaluationId : evaluationId,
          author: authorId
        })
    })
    .then(checkAuthResponse)
    .then(res => res.json())
}

export const publishEvaluation = (id, publishState) => {
  return fetch(
    `${BASE_URL}/evaluations/${id}`,
    {
        headers: getAuthHeaders({
          'Content-Type': 'application/json'
        }),
        method: "PUT",
        body: JSON.stringify({
          published: publishState,
        })
    }).then(checkAuthResponse)
};

export const createEvaluation = (name, author, group) => {
  return fetch(`${BASE_URL}/evaluations`, {
        headers: getAuthHeaders({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
          name : name,
          author: author,
          groupClass: group
        })
    }).then(checkAuthResponse)
    .then(res => res.json())
};

export const createQuestion = (evaluationId, content, points) => {
  return fetch(`${BASE_URL}/evaluations/${evaluationId}/questions`, {
        headers: getAuthHeaders({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
          content : content,
          points: points
        })
    })
    .then(checkAuthResponse)
    .then(res => res.json())
}

export const createQuestions = (evaluationId, questions) => {
  return fetch(`${BASE_URL}/evaluations/${evaluationId}/questions`, {
        headers: getAuthHeaders({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
          evalId : evaluationId,
          questions: questions
        })
    })
    .then(checkAuthResponse)
    .then(res => res.json())
}

export const deleteEvaluation = (evaluationId) => {
  return fetch(
    `${BASE_URL}/evaluations/${evaluationId}`,
    {
        headers: getAuthHeaders({
          'Content-Type': 'application/json'
        }),
        method: "DELETE",
    }).then(checkAuthResponse)
}

export const updateCopy = (id, responses) => {
  return fetch(
    `${BASE_URL}/papers/${id}`,
    {
        headers: getAuthHeaders({
          'Content-Type': 'application/json'
        }),
        method: "PUT",
        body: JSON.stringify({
          responses: responses,
        })
    }).then(checkAuthResponse)
}


export const getUser = () => {
  const url = `${BASE_URL}/users/`;
  return fetch(   url,
                { headers: getAuthHeaders() }
              )
          .then(checkAuthResponse)
          .then(response => response.json())
}

export const getPromos = () => {
  const url = 'https://linkapp.ebm.nymous.io/api/promos/listpromos'
  return fetch(
          url,
          {
            headers: {
              "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJyb2xlIjoiZXR1ZGlhbnQiLCJub20iOiJyb290IiwicHJlbm9tIjoicm9vdCIsImVtYWlsIjoicm9vdEBldHVkaWFudC5mciIsImlhdCI6MTUyMTQwNjI2NX0.X9lTVE4dTi_1PUkojmpHWnJzM_fkrmv-VZPGjhLlV14"
            }
          })
          .then(checkAuthResponse)
          .then(response => response.json())
}
