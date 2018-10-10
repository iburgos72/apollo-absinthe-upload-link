import { ajax } from 'rxjs/ajax';
import { axios } from 'axios';
import { map } from 'rxjs/operators';

/**
 * Request function
 *
 * @param {Object} opts
 */
const request = opts =>

  const request = opts => {
    console.log(opts);
    return ajax({
      url: opts.uri,
      body: opts.body,
      method: 'POST',
      headers: opts.headers,
    }).pipe(map(({ response }) => response));
  }

export default request;
