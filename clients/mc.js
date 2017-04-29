const public = require('../lib/public.js');
const private = require('../lib/private.js');

function defaults() {
    return {
        baseUrl: 'https://mc.ahst.fr'
    };
}

function append(key, data, next) {
    let params = defaults();
    params.resource = 'data/' + key,
    params.data = data;

    public(params, next);
}

function history(key, next) {
    let params = defaults();
    params.resource = 'data/' + key;

    private(params, next);
}

function load(key, next) {
    let params = defaults();
    params.resource = 'memory/' + key;

    private(params, next);
}

function save(key, value, next) {
    let params = defaults();
    params.resource = 'memory/' + key;
    params.data = value;

    private(params, next);
}

function send(message, options, next) {
    if (!options) {
        options = {};
    }

    let wrapped = { message: message };
    if (options.serial) {
        wrapped.serial = options.serial;
    }

    let params = defaults();
    params.resource = 'send';
    params.data = wrapped;

    private(params, next);
}

module.exports = {
    append: append,
    history: history,
    load: load,
    save: save,
    send: send
};