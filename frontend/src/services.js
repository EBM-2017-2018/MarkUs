
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
        headers: getAuthHeaders(),
        method: "PUT",
        body: JSON.stringify({
          published: publishState,
        })
    }).then(checkAuthResponse)
}

export const createEvaluation = (name) => {
  return fetch(`${BASE_URL}/evaluations`, {
        headers: getAuthHeaders(),
        method: 'POST',
        body: JSON.stringify({
          name : name,
          groupClass: 'groupClass'
        })
    }).then(checkAuthResponse)
    .then(res => res.json())
}

export const createQuestion = (evaluationId, content, points) => {
  return fetch(`${BASE_URL}/evaluations/${evaluationId}/questions`, {
        headers: getAuthHeaders(),
        method: 'POST',
        body: JSON.stringify({
          content : content,
          points: points
        })
    })
    .then(checkAuthResponse)
    .then(res => res.json())
}

export const deleteEvaluation = (evaluationId) => {
  return fetch(
    `${BASE_URL}/evaluations/${evaluationId}`,
    {
        headers: getAuthHeaders(),
        method: "DELETE",
    }).then(checkAuthResponse)
}

export const updateCopy = (id, responses) => {
  return fetch(
    `${BASE_URL}/papers/${id}`,
    {
        headers: getAuthHeaders(),
        method: "PUT",
        body: JSON.stringify({
          responses: responses,
        })
    }).then(checkAuthResponse)
}
