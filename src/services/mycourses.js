import request from '../utils/request';

export function query(limit,start) {
  console.log('query')
  limit = limit ? limit : 5;
  start = start ? start : 0;
  return request(`/mapi_v2/Course/getMyClassroomsAndCoursesByCategoryId?limit=${limit}&start=${start}`);
  //return request('./user.json');
}