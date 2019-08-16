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
      const list = yield query(payload.limit,payload.start).then(res => {
        return res.data
      })
      yield put({ type: 'fetch' , payload: list});

    },
    *firstFetch({ payload }, { put, call, select }) {
      let dataIds = [];
      const res = yield query().then(res => {
        return res
      })
      console.log(res)
      if(res.err || res.data.error && res.data.error.name === 'not_login'){
        console.log('未登录');
        window.location.href = "http://l.chinahadoop.cn/login?goto=http://l.chinahadoop.cn:8000/mycourses";
        
      }else{
        yield res.data.data.forEach(course => {
          dataIds.push(course.id)
          return dataIds;
        });
      }
      
      yield put({ type: 'fetchHome' , payload: {...res.data,dataIds}});
    },
  },
  reducers: {
    'fetchHome'(state, { payload: list }) {
      let firstMycourses = localStorage.getItem('firstMycourses');
      //let dataIds = firstMycourses && firstMycourses.dataIds || [];
      let mycoursesArray = [];
      let mydataIdsArray = [];
      if(firstMycourses) {
        mycoursesArray = JSON.parse(firstMycourses).data || [];
        mydataIdsArray = JSON.parse(firstMycourses).dataIds || [];
      }
      console.log('list:', list)
      //let {data, dataIds} = list;
      console.log(mydataIdsArray)
      console.log(list.dataIds)
      if(list.dataIds[0] === mydataIdsArray[0] && Array.isArray(mycoursesArray) && mycoursesArray.length >= 0){
        console.log('get localStorage')
        list = JSON.parse(localStorage.getItem('firstMycourses'))
        console.log({list,...{isHome:true,host:state.host}})
        return {list,...{isHome:true,host:state.host}};
      }else{
        if(firstMycourses) localStorage.removeItem('firstMycourses')
        console.log('set localStorage')
        localStorage.setItem("firstMycourses",JSON.stringify(list))
        console.log({...state,list,host:state.host})
        return {...state,list,...{isHome:true,host:state.host}};
      }
    },
    'fetch'(state, { payload: list }) {
      return {...state,list,...{isHome:false}};
    },
  },
};