import { Component } from 'react'; //1번 방법
import PropTypes from 'prop-types';

class Food extends Component {
  render() {
    const { name } = this.props;

    return (
      <>
        <h3>
          내가 좋아하는 음식은
          <span style={{ color: 'red' }}>{name}</span>
          입니다.
        </h3>
      </>
    );
  }
}

Food.defaultProps = {
  name: '민초',
};
Food.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Food;
