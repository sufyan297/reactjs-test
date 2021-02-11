import axios from 'axios';
import { API_END_POINT } from '../config/globals';

/**
 * Http Client
 * @param {options} Params 
 */
const _http = ({url = '', method = 'GET', data = null, headers = {}, extra = {} }) => {
  const ACCESS_TOKEN = localStorage.getItem('access_token');
  let auth = {};
  if (ACCESS_TOKEN) {
    auth = {
      Authorization: 'Bearer ' + ACCESS_TOKEN
    }
  }
  if (data) {
    extra = {
      ...extra,
      data
    }
  }
  return new Promise ((resolve, reject) => {
    axios({
      method: method,
      mode: 'no-cors',
      url: API_END_POINT + url,

      crossdomain: true,    
      responseType: 'json',
      headers: {
        // Accept: 'application/json',
        ...auth
      },
      ...extra
    })
    .then(resp => {
      const { data } = resp;
      resolve(data);
    })
    .catch(err => {
      console.log("Some Error Occured.");
      reject(err);
    })
  })
}

export {
  _http as http
}