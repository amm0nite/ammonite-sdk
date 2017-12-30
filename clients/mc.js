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
}

module.exports = Client;