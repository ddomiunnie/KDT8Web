import { createStore } from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';

//reducer
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [...state, newTodo];
    case DEL_TODO:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};
//store
const store = createStore(reducer);

//export default store;
