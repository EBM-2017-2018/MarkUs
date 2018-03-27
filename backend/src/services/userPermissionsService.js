const fetch = require('node-fetch');


module.exports = {};


module.exports.isInPromo = (promo, user, auth) =>
  fetch(`https://linkapp.ebm.nymous.io/api/promos/listpromosof/${user.username}`, {
    headers: {
      Authorization: `${auth}`,
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((res) => {
      const test = res
        .promotions
        .find(element => element.nomPromo === promo) !== undefined;
      return test;
    });


module.exports.isResponsableOfPromo = (promo, user, auth) =>
  fetch(`https://linkapp.ebm.nymous.io/api/promos/${promo}`, {
    headers: {
      Authorization: `${auth}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(res => res.json())
    .then(res => res
      .promotion
      .responsable === user.username);
