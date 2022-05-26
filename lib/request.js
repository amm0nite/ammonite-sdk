const util = require('util');
const debuglog = util.debuglog('sdk');

async function request(options) {
    let requestURL = options.baseURL;

    if (!requestURL.endsWith('/')) requestURL += '/';
    requestURL += options.resource;

    if (options.params) {
        if (!requestURL.endsWith('?')) requestURL += '?';
        requestURL += (new URLSearchParams(options.params)).toString();
    }

    const requestOptions = {
        headers: {},
    };

    if (options.token) {
        requestOptions.headers['Authorization'] = 'Bearer ' + options.token;
    }

    if (options.secret) {
        requestOptions.headers['secret'] = options.secret;
    }

    if (options.data) {
        requestOptions.method = 'POST';
        requestOptions.headers['Content-Type'] = 'application/json',
        requestOptions.body = JSON.stringify(options.data);
    }

    if (options.method) {
        requestOptions.method = options.method;
    }

    if (options.params) {
        requestOptions.params = options.params;
    }

    const response = await fetch(requestURL, requestOptions);
    if (!response.ok) {
        const error = createError(response);
        throw error;
    }

    return response.json();
}

function createError(response) {
    let message = [response.status, response.statusText].join(' ');
    const error = new Error(message);
    error.response = response;
    return error;
}

module.exports = request;
