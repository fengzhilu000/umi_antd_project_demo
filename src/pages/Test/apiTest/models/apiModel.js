/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-10 16:57:15
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-12 14:54:09
 */
/*
export default {
  namespace: '', // 表示在全局 state 上的 key
  state: {}, // 状态数据
  reducers: {}, // 管理同步方法，必须是纯函数
  effects: {}, // 管理异步操作，采用了 generator 的相关概念
  subscriptions: {}, // 订阅数据源
};

call: 执行异步函数
put: 发出一个 Action，类似于 dispatch
select: 返回 model 中的 state
*/

// import { getSomeData, } from '../../../../services/api';//../../services/api
import { getSomeData } from '../services/someData';
  
  function initState() {
    return {
      modelNum: 0,
      text: "没有返回"
    };
  }
  
  export default {
    namespace: 'myPage', // 表示在全局 state 上的 key
    state: initState(), // 状态数据
    effects: { // 管理异步操作，采用了 generator 的相关概念
      *getSomeData({ payload }, { call, put, select }) {
        debugger
        const res = yield call(getSomeData, payload);
        debugger
        if (res?.code === 200) { // 拿到数据，可以选择存到 model 中
          yield put({
            type: 'saveDefault',
            payload: {
              text: res.data,
            },
          });
        }
        return res;
      },
    },
  
    reducers: { // 管理同步方法，必须是纯函数
      saveDefault(state, action) {
        debugger
        return {
          ...state,
          ...action.payload,
        };
      },
  
      resetState() {   // 重置 state
        return initState();
      },
    },
  };