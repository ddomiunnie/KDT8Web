import { useRef } from 'react';

const UseRef2 = () => {
  // 1. ref 객체 만들기
  const idRef = useRef(1);

  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
  };

  return (
    <>
      <p>useRef 로컬변수 사용</p>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>focus</button>
    </>
  );
};

export default UseRef2;
