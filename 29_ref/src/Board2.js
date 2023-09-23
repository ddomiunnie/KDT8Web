import React, { useState, useRef, useEffect } from 'react';

function Board2() {
  const inputWriterRef = useRef(null);
  const inputTitleRef = useRef(null);

  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // 작성자 input에 포커스를 주기 위해 마운트 후 실행
    inputWriterRef.current.focus();
  }, []);

  const onChange = (e) => {
    if (e.target.name === 'inputWriter') {
      setInputWriter(e.target.value);
    } else if (e.target.name === 'inputTitle') {
      setInputTitle(e.target.value);
    }
  };

  const addComment = () => {
    if (!inputWriter || !inputTitle) {
      // 작성자나 제목 중 하나라도 비어있으면 추가하지 않음
      return;
    }

    const newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    setComments([...comments, newComment]);
    setInputTitle('');
    setInputWriter('');

    // 작성자 input으로 포커스 이동
    inputWriterRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  return (
    <>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          id="writer"
          name="inputWriter"
          value={inputWriter}
          onChange={onChange}
          ref={inputWriterRef}
          onKeyPress={handleKeyPress}
        />
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          id="title"
          name="inputTitle"
          value={inputTitle}
          onChange={onChange}
          ref={inputTitleRef}
          onKeyPress={handleKeyPress}
        />
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

export default Board2;
