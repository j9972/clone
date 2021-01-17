const { json } = require('body-parser');
const express = require('express');
const app = express();

// create
app.get('/jsy_blog_create', (req, res) => {
    console.log('게시글 생성 페이지');
    
    // 파일을 보내는 방법 -> nodemon이 server 폴더가 아니라 client 폴더에서만 열림
    // 질문) index.js가 client폴더가 아닌 server폴더에서 실행하는 방법 -> 경로때문에 에러가 나는데 해결을 못했음
    res.sendFile(__dirname + '/index.html');
})

// upload
app.get('/jsy_blog_upload', (req, res) => {
    console.log('게시글 수정 페이지');
    res.sendFile(__dirname + '/index.html');
})

// delete
app.get('/jsy_blog_delete', (req, res) => {
    console.log('게시글 삭제 페이지');
    res.sendFile(__dirname + '/index.html');
})

// 8080은 port number
app.listen(8080, () => {
    // 경로는 client가 아니라 server folder에서 해야하며, url이 localhost:8080에 열린다.
    console.log('listening on 8080');
})