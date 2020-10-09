/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 14:46:22
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-09 15:20:22
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
    subscriptions: {
      setup({ dispatch, history }) {
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
          debugger
          let payload = {operator: `${keymasterList?.ctrl_up?.name}`}
          dispatch({type:'keyEvent', payload})
        });
      },
    },
    reducers:{
      updatePage(state, { page }) {
        if (state.activePage !== page) {
          return { ...state, activePage: page };
        }
        return { ...state };
      },
      keyEvent(state, { payload }) {
        debugger
        if (payload !== undefined) {
          console.log('keymaster-operator: ', payload.operator);
        }
        return { ...state };
      },
    }
};

export default GlobalModel;