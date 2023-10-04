import { createContext } from 'react';

//Context 생성
//Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  language: '',
  setLanguage: () => {},
});

export default MyContext;
