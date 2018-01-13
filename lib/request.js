const request = require('request');
const logger = require('winston');

function basicRequest(params, next) {
    if (!next) {
        next = (err) => {
            if (err) logger.error(err);
        };
    }

    var options = {
        baseUrl: params.baseUrl,
        headers: {},
        uri: params.resource,
        method: 'GET',
        json: true
    };

    if (params.token) {
        options.headers['Authorization'] = 'Bearer ' + params.token;
    }

    if (params.secret) {
        options.headers['secret'] = params.secret;
    }

    if (params.data) {
        options.method = 'POST';
        options.body = params.data;
    }

    if (params.delete) {
        options.method = 'DELETE';
    }

    request(options, (err, res) => {
        if (err) {
            if (err instanceof Error) {
                return next(err);
            } else {
                logger.error(err);
                process.exit(-1);
            }
        }

        let code = parseInt(res.statusCode);
        let data = res.body;

        if (code < 200 || code > 299) {
            let error = new Error(findMessage(data));
            error.name = code;
            error.code = code;
            error.body = data;
            return next(error);
        }

        next(null, data);
    });
}

function findMessage(data) {
    let fields = ['message', 'type', 'error', 'name'];
    let found = fields.find((field) => {
        return (data[field] && typeof data[field] === 'string' && data[field].length < 255);
    });
    if (found) {
        return data[found];
    }
    return 'unknown';
}

module.exports = basicRequest;