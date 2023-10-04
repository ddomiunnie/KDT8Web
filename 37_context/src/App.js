import MyContext from './store/lang-context';
import LanguageProvider from './LangProvider';
import Form from './Form';
import { useState } from 'react';
import LanguageSelector from './LangSelector';

function App() {
  //const [language, setLanguage] = useState('ko');
  return (
    <>
      {/* <MyContext.Provider value={{ language, setLanguage }}>
        <LanguageSelector />
      </MyContext.Provider> */}
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
    </>
  );
}

export default App;
