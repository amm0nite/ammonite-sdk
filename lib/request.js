const request = require('request');

function basicRequest(params, next) {
    if (!next) {
        next = function(err) {};
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

    if (params.data) {
        options.method = 'POST';
        options.body = params.data;
    }

    request(options, function (err, res) {
        if (err) return next(err);
        if (res.statusCode != 200) return next(res.body);
        next(null, res.body);
    });
}

module.exports = basicRequest;