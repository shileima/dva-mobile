import request from '../utils/request';

export function query(limit,start) {
  console.log('query')
  limit = limit ? limit : 5;
  start = start ? start : 0;
  const options = {
    headers:{
      "Cookie": "pgv_pvi=8936885248; pgv_si=s9758778368; zg_did=%7B%22did%22%3A%20%2216c94be4d4029a-0f3ed86049ef4-a7f1a3e-1fa400-16c94be4d41174%22%7D; Hm_lvt_42496acfe194e26aac402105799876ef=1565863595; Hm_lpvt_42496acfe194e26aac402105799876ef=1565863595; PHPSESSID=nb4ukv4a02kibkhj8978jm10f5; REMEMBERME=VG9weGlhXFNlcnZpY2VcVXNlclxDdXJyZW50VXNlcjpkWE5sY2w5eE1qWnNlWHB5ZVhWQVpXUjFjMjlvYnk1dVpYUT06MTU5NzM5OTYwMzo5YzVlNzBjM2Y2OTA3MTc5MjM0ODRiZjA3ODVhOTFkMGZlMGQwNjgwM2E4MGJkMDc4NWU1ZTcyYjVlNDcxNDc5; zg_727f75a76e954bc385156eb7ff3fb110=%7B%22sid%22%3A%201565863595334%2C%22updated%22%3A%201565863601652%2C%22info%22%3A%201565863595342%2C%22superProperty%22%3A%20%22%7B%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22%22%2C%22landHref%22%3A%20%22http%3A%2F%2Fwww.chinahadoop.cn%2F%22%2C%22cuid%22%3A%20%2283914%22%7D"
    },
    credentials: 'include'
  }
  return request(`/mapi_v2/Course/getMyClassroomsAndCoursesByCategoryId?limit=${limit}&start=${start}`,options);
  //return request('./user.json');
}