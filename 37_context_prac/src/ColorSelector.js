import { useContext } from 'react';
import Color from './store/color-context';
import './color.css';

export default function ColorSelector() {
  const value = useContext(Color);

  return (
    <div className={`theme-${value.color}`}>
      <h2>현재 선택된 테마: {value.color}</h2>
      <select
        value={value.color}
        onChange={(e) => value.setColor(e.target.value)}
      >
        <option value="dark">dark</option>
        <option value="light">light</option>
      </select>
    </div>
  );
}
