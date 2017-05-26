import { parse as jsonApiParse } from 'jsonapi-parse';
import config from 'config';
import axios from './axios';

/**
 * Performs an http GET request to the provided url, automatically prepending
 * the base url
 * @param {string} url - The url to which the request should be performed, e.g. '/companies'
 * @return {Promise} Resolves with the response body, or rejects with an
 */
export function get(url) {
  return axios.get(url)
    .then(handleResponse);
}

export function handleResponse(response) {
  return jsonApiParse(response.data);
}
