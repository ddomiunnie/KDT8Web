import { useState } from 'react';

export default function Board() {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [comments, setComments] = useState([]);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const addComment = () => {
    const newComment = {
      writer: writer,
      title: title,
    };

    setComments([...comments, newComment]);
    setTitle('');
    setWriter('');
  };
  return (
    <>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          id="writer"
          value={writer}
          onChange={onChangeWriter}
        />
        <label htmlFor="title">제목: </label>
        <input type="text" id="title" value={title} onChange={onChangeTitle} />
        <button type="button" onClick={addComment}>
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
