import fetch from 'node-fetch';

module.exports = {};


module.exports.isInPromo = (promo, user, auth) => {
  console.log('isInPromo');
  fetch(`linkapp.ebm.nymous.io/api/listpromosof/${user.username}`, {
    headers: {
      Authorization: auth,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(res => res.json()
      .promotions
      .find(element => element.nomPromo === promo) !== undefined);
};

module.exports.isResponsableOfPromo = (promo, user, auth) => {
  console.log('isResponsableOfPromo');
  fetch(`linkapp.ebm.nymous.io/api/promos/${promo}`, {
    headers: {
      Authorization: auth,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(res => res.json()
      .promotion
      .responsable === user.username);
};
