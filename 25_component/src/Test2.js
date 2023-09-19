import { Component } from 'react';
import './Test2.css';
import computer from './computer.png';

class Test2 extends Component {
  render() {
    return (
      <>
        <div className="style">
          <h2>안녕하세요</h2>
          <img src={computer} alt="" />
        </div>
      </>
    );
  }
}

export default Test2;
