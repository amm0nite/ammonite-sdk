import request from '../lib/request.js';

export default class Client {
    constructor(url, token) {
        this.url = url;
        this.token = token;
    }

    defaults() {
        const defaults = { baseURL: this.url };
        if (this.token) {
            defaults.token = this.token;
        }
        return defaults;
    }

    append(key, data) {
        const options = this.defaults();
        options.resource = 'data/' + key,
        options.data = data;

        return request(options);
    }

    history(key, limit) {
        const options = this.defaults();
        options.resource = 'data/' + key;
        if (limit) {
            options.params = { limit };
        }

        return request(options);
    }
}
