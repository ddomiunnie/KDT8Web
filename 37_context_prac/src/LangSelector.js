import Language from './store/lang-context';
import { useContext } from 'react';

export default function LanguageSelector() {
  const value = useContext(Language);

  return (
    <div>
      <h2>현재 선택된 언어: {value.language}</h2>
      <select
        value={value.language}
        onChange={(e) => value.setLanguage(e.target.value)}
      >
        <option value="Korean">Korean</option>
        <option value="English">English</option>
      </select>
    </div>
  );
}
