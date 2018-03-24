import { getAuthHeaders } from 'ebm-auth/dist/browser';
import fetch from 'node-fetch';

module.exports = {};


module.exports.isInPromo = (promo, user, auth) => {
  console.log('isInPromo');
  fetch(`linkapp.ebm.nymous.io/api/promos/${promo}`, {
    headers: auth,
    method: 'GET',
  })
    .then(console.log(res => res.json()));
  return true;
};
