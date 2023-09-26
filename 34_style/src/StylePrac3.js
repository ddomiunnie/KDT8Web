import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const Button = styled.button`
  background-color: ${(props) => (props.active ? 'red' : 'blue')};
  color: ${(props) => (props.active ? 'black' : 'white')};
`;

export default function StylePrac3() {
  const [active, setActive] = useState(false);

  // 버튼을 클릭할 때 호출되는 함수
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <Button active={active} onClick={handleClick}>
        <p>색상변경!</p>
      </Button>
    </div>
  );
}
