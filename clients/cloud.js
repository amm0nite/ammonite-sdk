const querystring = require('querystring');
const request = require('../lib/request.js');

function isObject(value) {
    const type = typeof value
    return value != null && (type == 'object' || type == 'function')
}

class Client {
    constructor(token) {
        this.token = token;
    }

    defaults() {
        let defaults = { baseUrl: 'https://cloud.ahst.fr' };
        if (this.token) {
            defaults.token = this.token;
        }
        return defaults;
    }

    fetchJobs(options, next) {
        var resource = 'jobs';
        if (options) {
            resource += '?' + querystring.stringify(options);
        }

        let params = this.defaults();
        params.resource = resource;
        request(params, next);
    }

    fetchJob(id, next) {
        let params = this.defaults();
        params.resource = 'job/' + id;
        request(params, next);
    }

    createJob(name, source, next) {
        if (!isObject(source)) {
            return next({ message:'source is not an object' });
        }
        
        var job = {
            name: name,
            sourceType: source.type,
            sourceUrl: source.url,
            launch: true
        };

        let params = this.defaults();
        params.resource = 'job';
        params.data = job;
        request(params, next);
    }
}

module.exports = Client;