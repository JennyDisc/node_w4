function successHandle(res, newPost) {
    // 回傳成功預設狀態200，這邊還是寫出來
    // res.end()依照傳入型別來決定回傳格式
    res.status(200).send({
        "status": "success",
        "data": newPost
    });
};

module.exports = successHandle;