function successHandle(res, newPost, message) {
    // 回傳成功預設狀態200，這邊還是寫出來
    // 寫法1
    // res.status(200).send({
    //     "status": "success",
    //     "data": newPost
    // });
    const responseObject = {
        "status": "success",
    };
    if (message) {
        responseObject.message = message
    } else {
        responseObject.data = newPost
    };
    // 回傳成功預設狀態200，這邊還是寫出來
    res.status(200).send(responseObject);
};

module.exports = successHandle;