const sso = require('./sso.js');
const credentials = require('./credentials.js');
const refreshPeriod = 3600 * 1000;

var _tokenData = null;

function authenticate(next) {
    getStoredToken(next);
}

function getStoredToken(next) {
    if (!_tokenData) {
        _tokenData = credentials.load();
        if (!_tokenData) {
            return getCredentials(next);
        }
    }

    return checkToken(next);
}

function checkToken(next) {
    if (!_tokenData.token || !_tokenData.refreshToken || !_tokenData.expireAt) {
        return getCredentials(next);
    }

    var expireAt = new Date(_tokenData.expireAt);
    var refreshLimit = new Date(expireAt.getTime() + refreshPeriod);
    var now = new Date();

    if (now < expireAt) {
        return success(next);
    }

    if (now < refreshLimit) {
        return refreshToken(next);
    }

    return getCredentials(next);
}

function refreshToken(next) {
    sso.refreshToken(_tokenData, function(err, data) {
        if (err) return getCredentials(next);
        _tokenData.refreshToken = data.refreshToken;
        _tokenData.expireAt = data.expireAt;
        return success(next);
    });
}

function getCredentials(next) {
    let creds = credentials.get();
    if (creds) {
        return login(creds, next);
    }

    return next('missing credentials');
}

function login(creds, next) {
    sso.createToken(creds, function(err, data) {
        if (err) return next(err);
        _tokenData = data;
        return success(next);
    });
}

function success(next) {
    return next(null, _tokenData.token);
}

module.exports = authenticate;