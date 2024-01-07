const qs = require('querystring');
const url = require('url');
const handleError = require('./handleError');
const users = require('../user');

function handlePostReq(req, res) {

    const size = parseInt(req.headers['content-length'], 10);
    const buffer = Buffer.allocUnsafe(size);
    let pos = 0;

    const { pathname } = url.parse(req.url)
    if (pathname !== '/user') {
        return handleError(res, 404);
    }

    req 
    .on('data', (chunk) => { 
      const offset = pos + chunk.length; 
      if (offset > size) { 
        reject(413, 'Too Large', res); 
        return; 
      } 
      chunk.copy(buffer, pos); 
      pos = offset; 
    }) 
    .on('end', () => { 
      if (pos !== size) { 
        reject(400, 'Bad Request', res); 
        return; 
      } 
      const data = JSON.parse(buffer.toString());
      
      users.saveUser(data);
      console.log('User Posted: ', data); 
      res.setHeader('Content-Type', 'application/json;charset=utf-8');
      res.end('You Posted: ' + JSON.stringify(data));
    })
}

module.exports = handlePostReq;
