export default {
  //命名空间
  namespace: 'user',
  //初始值
  state: { token: '' },
  //唯一可以修改state的地方
  reducers: {
    TOKEN(state, { payload }) {
      // 保存数据到 state
      return { ...state, token: payload };
    },
  },
  //处理异步的state数据
  effects: {
    *getuser({ token }, { put, call }) {
      // let res = yield call(_getUserByToken, token);
      // if (res.code) {
      //   yield put({ type: 'TOKEN', payload: '123' });
      // }
    }
  }
}
