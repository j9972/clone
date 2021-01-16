const { json } = require('body-parser');
const express = require('express');
const app = express();

// create
app.get('/jsy_blog', (req, res) => {
    res.send('반갑습니다.');
})

// upload
app.get('/jsy_blog', (req, res) => {
    res.send('반갑습니다.');
})

// delete
app.get('/jsy_blog', (req, res) => {
    res.send('반갑습니다.');
})

// 8080은 port number
app.listen(8080, () => {
    // 경로는 client가 아니라 server folder에서 해야하며, url이 localhost:8080에 열린다.
    console.log('listening on 8080');
})