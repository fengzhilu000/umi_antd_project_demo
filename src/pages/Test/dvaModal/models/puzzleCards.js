/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-10 08:58:35
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-10 16:14:51
 */
import request from '../services/puzzleCards';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

const PuzzleCards = {
  namespace: 'puzzlecards',
  state: {
    data: [],
    counter: 0,
  },
  effects: {
    *queryInitCards({payload, callback}, {select, call, put}) {
      debugger
      const stateTest = yield select(state=>state.puzzlecards.counter);
      // const { call, put } = sagaEffects;
      const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';

      const puzzle = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle });

      yield call(delay, 3000);

      const puzzle2 = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle2 });
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      debugger
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};

export default PuzzleCards;