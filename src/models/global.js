/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 14:46:22
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-10 17:08:33
 */

//keyboard 输入
import key from 'keymaster';//yarn add react-keymaster

//#region 键盘事件命名规范
const keymasterList = {
  ctrl_up: {title:'⌘+up', name: 'ctrl+up'},
  ctrl_down: {title:'⌘+down', name: 'ctrl+down'},
}
//#endregion

const GlobalModel = {
    namespace: 'global',
    state:{
        activePage: '',
    },
    effects:{

    },
    // subscription相当于一个监听器，可以监听路由变化，鼠标，键盘变化，服务器连接变化，状态变化等，这样在其中就可以根据不同的变化做出相应的处理，在这个subsription中的方法名是随意定的，每次变化都会一次去调用里面的所有方法，所以一边会加相应的判断。
    subscriptions: {
      setup({ dispatch, history }) {  // 这里的方法名可以随便命名，当监听有变化的时候就会依次执行这的变化,这里的dispatch和history和之前说的是一样的
        window.onresize = () => {   //这里表示的当浏览器的页面的大小变化时就会触发里面的dispatch方法，这里的save就是reducers中的方法名
          dispatch ({type:"save"})  
        }
        
        return history.listen(({ pathname, query }) => {
          // 进入 '/home' 路由，发起一个名叫 'query' 的 effect
          // if (pathname === '/home') {
          //   dispatch({ type: 'query' });
          // }
          let activePage = query.page;

          if(!activePage)
          {
          activePage=pathname;
          }

          dispatch({ 
              type: 'updatePage', 
              page: activePage });
          });
      },
      keyEvent({dispatch}) {
        key(`${keymasterList?.ctrl_up?.title}, ${keymasterList?.ctrl_up?.name}`, () => { 
          // debugger
          let payload = {operator: `${keymasterList?.ctrl_up?.name}`}
          dispatch({type:'keyEvent', payload})
        });
      },
      onClick ({dispatch}) {
        document.addEventListener('click',() => {   //这里表示当鼠标点击时就会触发里面的dispatch命令，这里的save就是reducers中的方法名
          // debugger
          dispatch({type:"save"});
        })
      },
      setupHistory({dispatch,history}){
        // debugger
        history.listen((location) => {
          // debugger
          console.log(location)   //这里可以获取当前变化的history路径以及参数，hash所有值，这样就可以在路由地址变化后做处理

        })
      }
  
    },
    reducers:{
      updatePage(state, { page }) {
        if (state.activePage !== page) {
          return { ...state, activePage: page };
        }
        return Object.assign({}, state, {});
        // return { ...state };
      },
      keyEvent(state, { payload }) {
        // debugger
        if (payload !== undefined) {
          console.log('keymaster-operator: ', payload.operator);
        }
        return { ...state };
      },
      save(state, action) {
        // debugger
        return { ...state, ...action.payload };
      },
    }
};

export default GlobalModel;