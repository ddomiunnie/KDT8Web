import { createContext } from 'react';

const Language = createContext({
  language: '',
  setLanguage: () => {},
});

export default Language;
