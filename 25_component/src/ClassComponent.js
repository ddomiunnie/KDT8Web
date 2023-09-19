import { Component } from 'react'; //1번 방법
import PropTypes from 'prop-types';
// import React from 'react';  //2번 방법

//class형 컴포넌트
//class형 컴포넌트명 extends Component
// class classComponent extends React.Component {} //2번방법
class ClassComponent extends Component {
  //1번방법

  //클래스형 컴포넌트에서는 render 함수는 필수
  render() {
    // const name = '김승주';
    const { name } = this.props;

    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <p>여기는 클래스형 컴포넌트</p>
        <h4>{name}</h4>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  name: '김또미',
};

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ClassComponent;
