// mysql 연결 전
// exports.getVisitors = () => {
//   return [
//     {
//       id: 1,
//       name: '홍길동',
//       comment: '내가 왔다.',
//     },
//     {
//       id: 2,
//       name: '이찬혁',
//       comment: '으라차차',
//     },
//   ];
// };

const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'kdt8',
});

// mysql 연결 후
exports.getVisitors = (callback) => {
  const sql = 'SELECT * FROM visitor;';
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('Visitor : ', rows);
    callback(rows);
  });
};
//등록
exports.insert = (name, comment, callback) => {
  var sql =
    "INSERT INTO visitor (name, comment) VALUES ('" +
    name +
    "', '" +
    comment +
    "');";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);

    callbackb(rows.insertId);
  });
};
