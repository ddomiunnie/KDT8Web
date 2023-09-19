import PropTypes from 'prop-types';
import './Book.css';
import book from './book.jpg';

function Book(props) {
  return (
    <div className="back">
      <div className="main">이번주 베스트셀러 </div>
      <img className="book" src={book} alt="" />
      <div className="title">title: {props.title}</div>
      <div>author: {props.author}</div>
      <div>price: {props.price}</div>
      <div>type: {props.type}</div>
    </div>
  );
}

Book.defaultProps = {
  title: '나의 하루는 4시 40분에 시작된다',
  author: '김유진',
  price: '13,500원',
  type: '자기계발서',
};
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
};

export default Book;
