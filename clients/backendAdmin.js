const request = require('../lib/request.js');

class Client {
    constructor(url, secret) {
        this.url = url;
        this.secret = secret;
    }

    defaults() {
        const defaults = { baseURL: this.url };
        if (this.secret) {
            defaults.secret = this.secret;
        }
        return defaults;
    }

    getUser(uid) {
        const options = this.defaults();
        options.resource = 'user/' + uid;

        return request(options);
    }

    getDevice(secret) {
        const options = this.defaults();
        options.resource = 'device/' + secret;

        return request(options);
    }

    createDevice(data) {
        const options = this.defaults();
        options.resource = 'device';
        options.data = data;

        return request(options);
    }

    getUnclaimedDevices() {
        const options = this.defaults();
        options.resource = 'devices/unclaimed';

        return request(options);
    }
}

module.exports = Client;
