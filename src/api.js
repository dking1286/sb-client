import axios from 'axios';
import config from '../config';


function prependApiHostname(url) {
  return `${config.apiUrl}/api${url}`;
}

export function get(url) {
  return axios.get(url);
}
