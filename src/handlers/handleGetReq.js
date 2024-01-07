const handleError  = require('./handleError');
const users = require('../user');
const url = require('url');	// to parse url data

function handleGetReq(req, res){
	const {pathname} = url.parse(req.url)
	if(pathname !== '/users'){
		return handleError(res, 404)
	}
	res.setHeader('Content-Type', 'application/json;charset=utf-8');
    	return res.end(JSON.stringify(users.getUsers()))
}

module.exports = handleGetReq;
