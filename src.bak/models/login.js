import { query } from '../services/login';

export default {
  namespace: 'user',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetchLogin({ payload }, { call, put }) {  // eslint-disable-line
      console.log('fetchLogin')
      const status = yield query(payload).then(res=>{
        return res.data;
      });
      console.log(status)
      yield put({ type: 'saveLogin',payload:status });
    },
  },
  reducers: {
    'saveLogin'(state, { payload }) {
      return {...state,...payload};
    }

  },
};