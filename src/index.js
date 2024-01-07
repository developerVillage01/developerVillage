const http = require('http');
const handleGetReq = require('./handlers/handleGetReq');
const handleDeleteReq = require('./handlers/handleDeleteReq');
const handlePutReq = require('./handlers/handlePutReq');
const handlePostReq = require('./handlers/handlePostReq');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        return handleGetReq(req, res);
    } else if (req.method === 'POST') {
        return handlePostReq(req, res);
    } else if (req.method === 'DELETE') {
        return handleDeleteReq(req, res);
    } else if (req.method === 'PUT') {
        return handlePutReq(req, res);
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});




