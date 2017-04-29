const public = require('./public.js');

function defaults() {
    return {
        baseUrl: 'https://sso.ahst.fr',
        method: 'GET',
        json: true
    };
}

function createToken(credentials, next) {
    let params = defaults();
    params.resource = 'access';
    params.data = credentials;

    public(params, next);
}

function refreshToken(tokenData, next) {
    let params = defaults();
    params.resource = 'refresh';
    params.data = tokenData;

    public(params, next);
}

function createApiToken(token, description, next) {
    let params = defaults();
    params.resource = 'apiToken';
    params.token = token;
    params.body = { 'description': description };

    public(params, next);
}

function fetchUser(token, next) {
    let params = defaults();
    params.resource = 'user';
    params.token = token;

    public(params, next);
}

module.exports = {
    'createToken': createToken,
    'refreshToken': refreshToken,
    'createApiToken': createApiToken,
    'fetchUser': fetchUser,
};