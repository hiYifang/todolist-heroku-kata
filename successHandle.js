function successHandle(res, todos, headers) {
  res.writeHead(200, headers());
  res.end(JSON.stringify({
    "status": "success",
    "data": todos
  }));
}

module.exports = successHandle;