const request = require('../lib/request.js');

class Client {
    constructor(token) {
        this.token = token;
    }

    defaults() {
        let defaults = { baseUrl: 'https://mc.amnt.fr' };
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

    history(key, limit, next) {
        if (!next && typeof limit === "function") {
            next = limit;
        }

        let params = this.defaults();
        params.resource = 'data/' + key;

        request(params, next);
    }
}

module.exports = Client;