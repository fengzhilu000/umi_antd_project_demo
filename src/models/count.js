/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-09 09:09:38
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-09 10:06:19
 */
function asyncInit(){
    debugger
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(100)
        }, 1000);
    });
}

export default {
    namespace: 'count',//
    state: JSON.parse(localStorage.getItem('count') || 99),
    // state: {
    //     count: JSON.parse(localStorage.getItem('count') || 99),
    // },
    effects:{
        // generactor 这玩意还再用，我也是醉了
        //这个执行异步操作，这玩意是* 生成器函数？？
        * init(action, { call, put }) {
            debugger
            let payload = yield call(asyncInit);
            debugger
            yield put({ type: "setCount", payload });
        }
    },
    reducers:{
        add(state, action) {
            debugger
          return state + action.payload;
        },
        minus(state, action){
            debugger
            return state - action.payload;
        },
        setCount(state, action) {
            debugger
            state = action.payload
            return state;
        },
    }
};