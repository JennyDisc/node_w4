function errorHandle(res, message) {
    // 回傳成功預設狀態200，這邊還是寫出來
    res.status(400).send({
        "status": 'false',
        "message": message
    })
};

module.exports = errorHandle;