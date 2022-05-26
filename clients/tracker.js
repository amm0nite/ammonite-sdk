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

    pmtklox(data) {
        const options = this.defaults();
        options.resource = 'pmtklox',
        options.data = data;

        return request(options);
    }

    createPoint(data) {
        const options = this.defaults();
        options.resource = 'point',
        options.data = data;

        return request(options);
    }
}
