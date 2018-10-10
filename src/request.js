import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

/**
 * Request function
 *
 * @param {Object} opts
 */

function request(opts) {
  console.log(opts);
  ajax({
    url: opts.uri,
    body: opts.body,
    method: 'POST',
    headers: opts.headers,
  }).pipe(map(({ response }) => response))
}

//const request = opts =>
//  ajax({
//    url: opts.uri,
//    body: opts.body,
//    method: 'POST',
//    headers: opts.headers,
//  }).pipe(map(({ response }) => response))

export default request
