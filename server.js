const http = require('http');
const { v4: uuidv4 } = require('uuid');
const headers = require('./headers');
const successHandle = require('./successHandle');
const errHandle = require('./errHandle');

let todos = [];

const reqListener = (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  })

  if (req.url === '/todos') {
    const method = req.method;
    switch (method) {
      case 'GET': {
        successHandle(res, todos, headers);
        break;
      }
      case 'DELETE': {
        todos.length = 0;
        successHandle(res, todos, headers);
        break;
      }
      case 'POST': {
        req.on('end', () => {
          try {
            // 物件是否有 title 屬性
            const title = JSON.parse(body).title;
            if (title !== undefined) {
              const todo = {
                "title": title,
                "id": uuidv4()
              }
              todos.push(todo);
              successHandle(res, todos, headers);
            } else {
              errHandle(res, headers);
            }
          } catch {
            // 是否為 JSON 格式
            errHandle(res, headers);
          }
        })
        break;
      }
      default: {
        console.log('無法判斷 todos');
        break;
      }
    }
  }else if(req.url.startsWith('/todos/')){
    const method = req.method;
    switch (method){
      case 'DELETE' : {
        const index = todos.findIndex(el => el.id === req.url.split('/').pop());
        // id 是否存在
        if(index !== -1){
          todos.splice(index, 1);
          successHandle(res, todos, headers);
        }else{
          errHandle(res, headers);
        }
        break;
      }
      case 'PATCH': {
        req.on('end', () => {
          try{
            // 物件是否有 title 屬性、id 是否存在
            const title = JSON.parse(body).title;
            const index = todos.findIndex(el => el.id === req.url.split('/').pop());
            if(title !== undefined && index !== -1){
              todos[index].title = title;
              successHandle(res, todos, headers);
            }else{
              errHandle(res, headers);
            }
          }catch{
            // 是否為 JSON 格式
            errHandle(res, headers);
          }
        })
        break;
      }
      default: {
        console.log('無法判斷 todos id');
        break;
      }
    }
  } else if (req.method === "OPTIONS") {
    res.writeHead(200, headers());
    res.end();
  } else {
    res.writeHead(404, headers());
    res.end(JSON.stringify({
      "status": "fail",
      "msg": "無對應路由"
    }))
  }
}

const server = http.createServer(reqListener);
server.listen(process.env.PORT || 3005);