import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import axios from 'axios';

/**
 * Request function
 *
 * @param {Object} opts
 */

function request(opts) {
  console.log(axios);
  axios.post(opts.uri, opts.body)
    .then(function(response) {
      console.log("post then",response);
    })
    .catch(function(error) {
      console.log("post error",error);
    })

  axios({
      method: 'post',
      url: opts.uri,
      data: opts.body
  })
    .then(function(response) {
      console.log("axios then",response);
    })
    .catch(function(error) {
      console.log("axios error",error);
    })
  //ajax({
  //  url: opts.uri,
  //  body: opts.body,
  //  method: 'POST',
  //  headers: opts.headers,
  //}).pipe(map(({ response }) => response))
}

//const request = opts =>
//  ajax({
//    url: opts.uri,
//    body: opts.body,
//    method: 'POST',
//    headers: opts.headers,
//  }).pipe(map(({ response }) => response))

export default request
