import { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState([]); // 할 일 목록
  const [inputTodo, setInputTodo] = useState(''); // input에 입력할 값

  const addTodo = () => {
    if (todos.length > 9) {
      alert('할 일이 너무 많아요!');
    } else if (inputTodo !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputTodo,
        checked: false,
      };
      setTodos([...todos, newTodo]); // 이전 할 일 목록에 새로운 할 일을 추가합니다.
      setInputTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const removeTodo = () => {
    setTodos(todos.filter((todo) => !todo.checked));
  };

  return (
    <>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder="할 일 입력 ..."
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={removeTodo}>완료된 할 일 삭제</button>
    </>
  );
}
