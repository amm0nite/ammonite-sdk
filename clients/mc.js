const request = require('../lib/request.js');

class Client {
    constructor(token) {
        this.token = token;
    }

    defaults() {
        let defaults = { baseUrl: 'https://mc.ahst.fr' };
        if (this.token) {
            defaults.token = this.token;
        }
        return defaults;
    }

    append(key, data, next) {
        let params = this.defaults();
        params.resource = 'data/' + key,
        params.data = data;

        request(params, next);
    }

    history(key, next) {
        let params = this.defaults();
        params.resource = 'data/' + key;

        request(params, next);
    }

    load(key, next) {
        let params = this.defaults();
        params.resource = 'memory/' + key;

        request(params, next);
    }

    save(key, value, next) {
        let params = this.defaults();
        params.resource = 'memory/' + key;
        params.data = value;

        request(params, next);
    }

    send(message, options, next) {
        if (!options) {
            options = {};
        }

        let wrapped = { message: message };
        if (options.serial) {
            wrapped.serial = options.serial;
        }

        let params = this.defaults();
        params.resource = 'send';
        params.data = wrapped;

        request(params, next);
    }
}

module.exports = Client;