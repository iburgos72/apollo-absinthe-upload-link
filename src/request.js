import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import axios from 'axios';

/**
 * Request function
 *
 * @param {Object} opts
 */

function request(opts) {
  console.log('axios',axios);
  console.log('axios post',axios.post);
  axios({
      method: 'post',
      url: opts.uri,
      data: opts.body
  })

  return axios.post(opts.uri, opts.body)
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
