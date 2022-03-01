function headers(){
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PATCH, DELETE',
    'Content-Type': 'application/json'
  }
}

module.exports = headers;