import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, DEL_TODO } from './store';

export default function Main() {
  const [text, setText] = useState('');
  //useSelector() : 리덕스 store의 state를 조회
  //인자로 콜백함수, 콜백삼수의 매개변수로 state를 받을 수 있음
  //자동으로 subscribe를 하고있기 때문에 데이터가 변형되면 컴포넌트가 재실행
  const todos = useSelector((state) => state);
  //dispatch는 우리가 호출할 수 있는 함수
  const dispatch = useDispatch();
  //todo 추가
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, text });
    setText('');
  };

  //todo 삭제
  const onClick = (id) => {
    dispatch({ type: DEL_TODO, id });
  };

  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id}>
            {todo.text}
            <button onClick={() => onClick(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
