import { createStore } from 'redux';

export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';

//리듀서 함수
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      //findIndex()는 배열의 index값을 찾아주며 존재하지 않는다면 -1 반환, 존재할 시 해당 index값 반환
      const findIndex = state.findIndex(
        (elem) => elem.id === action.product.id
      );
      if (findIndex !== -1) {
        //존재할 때
        const newState = [...state];
        console.log(state);
        newState[findIndex].quantity++;
        return newState;
      } else {
        //존재하지 않을 때
        return [...state, { ...action.product, quantity: 1 }];
      }

    case REMOVE_CART:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

//스토어 생성
const store = createStore(reducer);

export default store;
