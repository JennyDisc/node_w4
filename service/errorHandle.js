function errorHandle(res, message) {
    // 回傳成功預設狀態200，這邊還是寫出來
    // res.end()依照傳入型別來決定回傳格式
    res.status(400).send({
        "status": 'false',
        "message": message
    })
};

module.exports = errorHandle;