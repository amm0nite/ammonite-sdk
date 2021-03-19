
const axios = require('axios');
const util = require('util');
const debuglog = util.debuglog('sdk');

async function request(options) {
    const config = {
        url: options.resource,
        baseURL: options.baseURL,
        headers: {},
        method: 'get',
        responseType: 'json',
    };

    if (options.token) {
        config.headers['Authorization'] = 'Bearer ' + options.token;
    }

    if (options.secret) {
        config.headers['secret'] = options.secret;
    }

    if (options.data) {
        config.method = 'post';
        config.data = options.data;
    }

    if (options.method) {
        config.method = options.method;
    }

    if (options.params) {
        config.params = options.params;
    }

    const response = await axios(config);
    return response.data;
}

module.exports = request;
