import { checkAuthResponse, getAuthHeaders } from 'ebm-auth/dist/browser';

// TODO Not working
let user

//5ab51762ca59e9ff42edce67

export const getUser = () => user;


export const setUserFromApi = () => {
  const url = `/api/users/`;
  return fetch(   url,
                { headers: getAuthHeaders() }
              )
          .then(checkAuthResponse)
          .then(response => response.json())
          .then((response) => {
            user = {
              username: response.username,
              role: response.role,
              iat: response.iat
            }
          })
}
