const authenticate = require('./auth.js');
const public = require('./public.js');

function authenticatedRequest(params, next) {
    authenticate(function(err, token) {
        if (err) return next(err);
        params.token = token;
        return public(params, next);
    });
}

module.exports = authenticatedRequest;