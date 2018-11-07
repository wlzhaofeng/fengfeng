//使用express构建web服务器 --11:25
const express = require('express');
var app = express();
var server = app.listen(3000);
//托管静态资源到public目录下
app.use(express.static('public'));



