function errHandle(res, headers) {
  res.writeHead(400, headers());
  res.end(JSON.stringify({
    "status": "fail",
    "msg": "欄位資料填寫不正確，或是無此 Todo Id"
  }));
}

module.exports = errHandle;