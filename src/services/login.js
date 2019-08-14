import request from '../utils/request';

export function query(options) {
  console.log('query')
  return request('mapi_v2/User/loginNew',options);
  //return request('./user.json');
}
