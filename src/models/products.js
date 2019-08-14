import { query } from '../services/products';
export default {
  namespace: 'products',
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
      const list = yield query(1).then(res => {
        return res.data
      })
      yield put({ type: 'fetchHome' , payload: list});
    },
  },
  reducers: {
    'fetchHome'(state, { payload: list }) {
      return {...state,list};
    },
    'fetch'(state, { payload: list }) {
      return {...state,list};
    },
  },
};