/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 14:46:22
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-30 14:40:44
 */
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
    },
    reducers:{
      updatePage(state, { page }) {
        if (state.activePage !== page) {
          return { ...state, activePage: page };
        }
        return { ...state };
      },
    }
};

export default GlobalModel;