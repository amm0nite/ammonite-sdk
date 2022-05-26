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

    getDevices() {
        const options = this.defaults();
        options.resource = 'devices';

        return request(options);
    }

    claimDevice(secret) {
        const options = this.defaults();
        options.resource = 'claim';
        options.data = { secret };

        return request(options);
    }

    unclaimDevice(uid) {
        const options = this.defaults();
        options.resource = 'device/' + uid + '/claim';
        options.method = 'delete';

        return request(options);
    }

    getRoutines() {
        const options = this.defaults();
        options.resource = 'routines';

        return request(options);
    }

    getDeviceRoutines(uid) {
        const options = this.defaults();
        options.resource = 'device/' + uid + '/routines';

        return request(options);
    }

    createRoutine(data) {
        const options = this.defaults();
        options.resource = 'routine';
        options.data = data;

        return request(options);
    }

    bindRoutine(uid, name) {
        const options = this.defaults();
        options.resource = 'device/' + uid + '/routine/' + name;

        return request(options);
    }

    unbindRoutine(uid, name) {
        const options = this.defaults();
        options.resource = 'device/' + uid + '/routine/' + name;
        options.method = 'delete';

        return request(options);
    }

    sendMessage(uid, message) {
        const options = this.defaults();
        options.resource = 'device/' + uid + '/message';
        options.data = message;

        return request(options);
    }
}
