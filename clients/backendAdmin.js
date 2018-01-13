const request = require('../lib/request.js');

class Client {
    constructor(secret) {
        this.secret = secret;
    }

    defaults() {
        let defaults = { baseUrl: 'https://backend.ahst.fr/admin' };
        if (this.secret) {
            defaults.secret = this.secret;
        }
        return defaults;
    }

    getDevice(secret, next) {
        let params = this.defaults();
        params.resource = 'device/' + secret;

        request(params, next);
    }

    createDevice(data, next) {
        let params = this.defaults();
        params.resource = 'device';
        params.data = data;

        request(params, next);
    }
}

module.exports = Client;