import { checkAuthResponse, getAuthHeaders } from 'ebm-auth/dist/browser';

// TODO Not working
let user
// let user = {
//   username: "fake",
//   role: "administrateur",
//   nom: "root",
//   prenom: "root",
//   email: "root@root.fr"
// }

//5ab51762ca59e9ff42edce67

export const getUser = () => user;


export const setUserFromApi = () => {
  const url = `/api/users/`;
  return fetch(   url,
                { headers: getAuthHeaders() }
              )
          .then(checkAuthResponse)
          .then(response => user = response.json())
}
