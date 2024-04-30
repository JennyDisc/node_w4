var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('./connections/index');

// 路由
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/postRoute');

// 使用 express
var app = express();

// 使用 express 功能
app.use(logger('dev'));
// 跨域
app.use(cors())
// 解析 json 格式
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 載入 cookie 的解析
app.use(cookieParser());
// 靜態網址路徑
app.use(express.static(path.join(__dirname, 'public')));

// 路由設計
app.use('/', indexRouter);
app.use('/posts', postsRouter);

module.exports = app;
