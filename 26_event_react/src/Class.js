import { Component } from 'react';
import './Class.css';

class Class extends Component {
  state = {
    author: '', // 작성자 상태 추가
    title: '', // 제목 상태 추가
    posts: [],
  };

  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value });
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handlePost = () => {
    const { author, title, posts } = this.state;
    if (author && title) {
      // 작성자와 제목 모두 입력된 경우에만 글 작성
      const newPost = {
        id: posts.length + 1,
        author: author,
        title: title,
      };

      this.setState({
        author: '', // 작성자 상태 초기화
        title: '', // 제목 상태 초기화
        posts: [...posts, newPost],
      });
    }
  };

  render() {
    return (
      <>
        <div className="div1">
          작성자:{' '}
          <input
            type="text"
            placeholder="작성자"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          제목:{' '}
          <input
            type="text"
            placeholder="제목"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <button onClick={this.handlePost}>작성</button>
        </div>
        <br />
        <div className="div2">
          <select>
            <option>작성자</option>
            <option>제목</option>
          </select>
          <input type="text" placeholder="검색어" />
          <button>검색</button>
        </div>
        <br />
        <div className="div3">
          <table className="table">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td> {/* 제목 표시 */}
                  <td>{post.author}</td> {/* 작성자 표시 */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Class;
