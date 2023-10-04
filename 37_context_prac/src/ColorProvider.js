import { useState } from 'react';
import Color from './store/color-context';

const ColorProvider = (props) => {
  const [color, setColor] = useState('black');

  const colorValue = {
    color,
    setColor,
  };

  return <Color.Provider value={colorValue}>{props.children}</Color.Provider>;
};

export default ColorProvider;
