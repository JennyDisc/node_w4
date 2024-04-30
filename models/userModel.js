const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '貼文姓名未填寫']
        },
        email: {
            type: String,
            required: [true, 'email 未填寫'],
            unique: true,
        },
        photo: {
            type: String,
            default: ""
        },
        followList: {
            type: String
        },
        likeArticle: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        versionKey: false,
    }
);

// 建立 model
const User = mongoose.model('user', userSchema);

module.exports = User;
