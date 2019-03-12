const request = require('../lib/request.js');

class Client {
    constructor(token) {
        this.token = token;
    }

    defaults() {
        let defaults = { baseUrl: 'https://timelapse.amnt.fr/api' };
        if (this.token) {
            defaults.token = this.token;
        }
        return defaults;
    }

    getCapture(channel, next) {
        let params = this.defaults();
        params.resource = 'capture/' + channel;
        params.bin = true;

        request(params, next);
    }

    getChannels(next) {
        let params = this.defaults();
        params.resource = 'channel';

        request(params, next);
    }
}

module.exports = Client;