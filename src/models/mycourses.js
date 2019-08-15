import { query } from '../services/mycourses';
export default {
  namespace: 'mycourses',
  state: {
    list:[]
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      //dispatch({type:'firstFetch'})
    },
  },

  effects: {
    *scrollFetch({ payload }, { put, call, select }) {  // eslint-disable-line
      const list = yield query(payload).then(res => {
        return res.data
      })
      yield put({ type: 'fetch' , payload: list});

    },
    *firstFetch({ payload }, { put, call, select }) {
      const list = yield query().then(res => {
        return res.data
      })
      yield put({ type: 'fetchHome' , payload: list});
    },
  },
  reducers: {
    'fetchHome'(state, { payload: list }) {
      let firstMycourses = localStorage.getItem('firstMycourses');
      let mycoursesArray;
      if(firstMycourses) {
        mycoursesArray = JSON.parse(firstMycourses).data;
      } 
      if(Array.isArray(mycoursesArray) && mycoursesArray.length >= 0){
        console.log('get localStorage')
        list = JSON.parse(localStorage.getItem('firstMycourses'))
        console.log({list})
        return {list,...{isHome:true}};
      }else{
        if(firstMycourses) localStorage.removeItem('firstMycourses')
        console.log('set localStorage')
        localStorage.setItem("firstMycourses",JSON.stringify(list))
        console.log({...state,list})
        return {...state,list,...{isHome:true}};
      }
    },
    'fetch'(state, { payload: list }) {
      return {...state,list,...{isHome:false}};
    },
  },
};