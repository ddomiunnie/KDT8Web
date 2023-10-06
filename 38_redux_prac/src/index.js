import { createStore } from 'redux';

const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DEL_TODO = 'DEL_TODO';

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

const removeTodo = (event) => {
  event.preventDefault();
  console.log(event);
  store.dispatch({ type: DEL_TODO, id: Number(event.target.parentNode.id) });
};
//subscribe 스토어의 데이터가 변경될 때 ()안에 있는 함수가 실행
//store.subscribe(() => console.log(store.getState()));
store.subscribe(() => {
  const todos = store.getState();
  ul.innerHTML = '';
  todos.map((value) => {
    //console.log(value);
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = '삭제';
    btn.addEventListener('click', removeTodo); //삭제 이벤트
    li.innerText = value.text;
    li.id = value.id;
    li.appendChild(btn);
    ul.appendChild(li);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  store.dispatch({ type: ADD_TODO, text: input.value });
  input.value = '';
});

// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import todoReducer from './reducers';
// import TodoList from './TodoList';

// const store = createStore(todoReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <TodoList />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );
