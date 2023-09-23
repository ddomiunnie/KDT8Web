import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);

    // Ref 생성
    this.inputWriterRef = React.createRef();
    this.inputTitleRef = React.createRef();

    // state 초기화
    this.state = {
      inputWriter: '', // 작성자
      inputTitle: '', // 제목
      comments: [], // 입력한 내용
    };

    // 바인딩
    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // 작성자 input에 포커스를 주기 위해 componentDidMount에서 실행
    this.inputWriterRef.current.focus();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addComment() {
    const { inputWriter, inputTitle } = this.state;
    if (!inputWriter || !inputTitle) {
      // 작성자나 제목 중 하나라도 비어있으면 추가하지 않음
      return;
    }

    const newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment],
      inputTitle: '',
      inputWriter: '',
    }));

    // 작성자 input으로 포커스 이동
    this.inputWriterRef.current.focus();
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addComment();
    }
  }

  render() {
    const { inputWriter, inputTitle, comments } = this.state;
    return (
      <>
        <form>
          <label htmlFor="writer">작성자: </label>
          <input
            type="text"
            id="writer"
            name="inputWriter"
            value={inputWriter}
            onChange={this.onChange}
            ref={this.inputWriterRef}
            onKeyPress={this.handleKeyPress}
          />
          <label htmlFor="title">제목: </label>
          <input
            type="text"
            id="title"
            name="inputTitle"
            value={inputTitle}
            onChange={this.onChange}
            ref={this.inputTitleRef}
            onKeyPress={this.handleKeyPress}
          />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Board;
