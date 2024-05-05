const mongoose = require("mongoose");

// 模組
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
// console.log(process.env.PORT);

const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
);

// 連接 mongodb 的 DB 這個資料庫
// mongoose.connect(DB)
mongoose.connect('mongodb://127.0.0.1:27017/talkroom')
    .then(() => {
        console.log('資料庫連線成功')
    }).catch((error) => {
        console.log(error)
    });

module.exports;