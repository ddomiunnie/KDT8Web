import { Component } from 'react';
import './Test.css';

const name = '김승주';

class Test extends Component {
  render() {
    return (
      <>
        <div className="my_style">{name}</div>
      </>
    );
  }
}

export default Test;
