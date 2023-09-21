import { useState } from 'react';

export default function Color() {
  const [color, setColor] = useState('black');
  const [text, setText] = useState('검정');

  const handleRed = () => {
    setColor('red');
    setText('빨간');
  };

  const handleBlue = () => {
    setColor('blue');
    setText('파란');
  };

  return (
    <>
      <div>
        <h1 style={{ color: color }}>{text}색 글씨</h1>
        <button onClick={handleRed}>빨간색</button>
        <button onClick={handleBlue}>파란색</button>
      </div>
    </>
  );
}
