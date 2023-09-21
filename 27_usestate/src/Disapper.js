import { useState } from 'react';

export default function Disapper() {
  const [visible, setVisible] = useState(true);

  const handleVisible = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      {visible && <h1>안녕하세요</h1>}
      <button onClick={handleVisible}>{visible ? '사라져라' : '보여라'}</button>
    </div>
  );
}
