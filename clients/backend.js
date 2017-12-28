const request = require('../lib/request.js');

class Client {
    constructor(token) {
        this.token = token;
    }

    defaults() {
        let defaults = { baseUrl: 'https://backend.ahst.fr/api' };
        if (this.token) {
            defaults.token = this.token;
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

    getDeviceRoutines(uid, next) {
        let params = this.defaults();
        params.resource = 'device/' + uid + '/routines';

        request(params, next);
    }

    createRoutine(data, next) {
        let params = this.defaults();
        params.resource = 'routine';
        params.data = data;

        request(params, next);
    }

    bindRoutine(uid, name, next) {
        let params = this.defaults();
        params.resource = 'device/' + uid + '/routine/' + name;

        request(params, next);
    }

    unbindRoutine(uid, name, next) {
        let params = this.defaults();
        params.resource = 'device/' + uid + '/routine/' + name;
        params.delete = true;

        request(params, next);
    }
}

module.exports = Client;