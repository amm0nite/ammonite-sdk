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

    getDevices(next) {
        let params = this.defaults();
        params.resource = 'devices';

        request(params, next);
    }

    claimDevice(secret, next) {
        let params = this.defaults();
        params.resource = 'claim';
        params.data = { secret };

        request(params, next);
    }

    getRoutines(next) {
        let params = this.defaults();
        params.resource = 'routines';

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

    sendMessage(uid, message, next) {
        let params = this.defaults();
        params.resource = 'device/' + uid + '/message';
        params.data = message;

        request(params, next);
    }
}

module.exports = Client;