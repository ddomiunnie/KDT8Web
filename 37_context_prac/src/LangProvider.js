// LangProvider.js
import React, { useState } from 'react';
import Language from './store/lang-context';

const LangProvider = (props) => {
  const [language, setLanguage] = useState('Korean');

  const contextValue = {
    language,
    setLanguage, // 올바른 setLanguage 함수 설정
  };

  return (
    <Language.Provider value={contextValue}>{props.children}</Language.Provider>
  );
};

export default LangProvider;
