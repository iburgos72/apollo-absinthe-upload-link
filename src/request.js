import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { axios } from 'axios';

/**
 * Request function
 *
 * @param {Object} opts
 */

function request(opts) {
  console.log(opts);
  axios({
      method: 'post',
      url: opts.uri,
      data: opts.body
  })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
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
