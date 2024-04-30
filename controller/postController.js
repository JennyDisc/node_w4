const mongoose = require("mongoose");
const Post = require("../models/postModel");
const User = require("../models/userModel");
const errorHandle = require("../service/errorHandle");
const successHandle = require("../service/successHandle");

const postController = {
    async getPosts(req, res) {
        const allposts = await Post.find().populate('user');
        successHandle(res, allposts);
    },
    async postPosts(req, res) {
        try {
            const data = req.body;
            if (data.content.trim() !== undefined) {
                const newPost = await Post.create(
                    {
                        user: data.user,
                        location: data.location,
                        type: data.type,
                        tags: data.tags,
                        content: data.content.trim(),
                        image: data.image,
                        likes: data.likes
                    }
                );
                successHandle(res, newPost);
            } else {
                const message = "欄位未填寫正確，或無該筆貼文 id";
                errorHandle(res, message);
            }
        } catch (error) {
            const message = error;
            errorHandle(res, message);
        };
    },
    // DELETE 刪除單筆資料時，若未填寫 ID 路由為 "/posts/” 時，會刪除所有貼文。用 req.originalUrl 判斷路由是否為 "/posts/” ，是才執行
    async deleteAllPosts(req, res) {
        if (req.originalUrl !== "/posts/") {
            await Post.deleteMany();
            res.status(200).send({
                "status": "success",
                "message": "已刪除全部貼文"
            })
            res.end();
        } else {
            const message = '查無該筆貼文 id';
            errorHandle(res, message);
        }
    },
    async deletePosts(req, res) {
        const id = req.params.id;
        const idResult = await Post.findByIdAndDelete(id);
        // 找到可刪除的會回傳那筆的物件內容。找不到可刪除的則回傳 null
        // console.log(idResult);
        if (idResult !== null) {
            successHandle(res, null);

        } else {
            const message = '查無該筆貼文 id';
            errorHandle(res, message);
        };
    },
    async patchPosts(req, res) {
        try {
            const data = req.body;
            // console.log(data);
            const id = req.params.id;
            const idResult = await Post.findById(id);
            // 找到這筆 id 會回傳那筆的物件內容。找不到則回傳 null
            // console.log(idResult);
            if (data.content.trim() !== undefined && idResult !== null) {
                await Post.findByIdAndUpdate(
                    id,
                    {
                        name: data.name,
                        location: data.location,
                        type: data.type,
                        tags: data.tags,
                        content: data.content.trim(),
                        image: data.image,
                        likes: data.likes
                    }
                );
                const newPost = await Post.findById(id);
                successHandle(res, newPost);
            } else {
                const message = '查無該筆貼文內容或 id 屬性';
                errorHandle(res, message);
            };
        } catch (error) {
            const message = '查無該筆貼文 id';
            errorHandle(res, message);
        };
    },
};

module.exports = postController;

