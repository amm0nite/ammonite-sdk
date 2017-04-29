const querystring = require('querystring');

const public = require('../lib/public.js');
const private = require('../lib/private.js');

function isObject(value) {
    const type = typeof value
    return value != null && (type == 'object' || type == 'function')
}

function defaults() {
    return {
        baseUrl: 'https://cloud.ahst.fr'
    };
}

function fetchJobs(options, next) {
    var resource = 'jobs';
    if (options) {
        resource += '?' + querystring.stringify(options);
    }

    let params = defaults();
    params.resource = resource;
    private(params, next);
}

function fetchJob(id, next) {
    let params = defaults();
    params.resource = 'job/' + id;
    private(params, next);
}

function createJob(name, source, next) {
    if (!isObject(source)) {
        return next({ message:'source is not an object' });
    }
    
    var job = {
        name: name,
        sourceType: source.type,
        sourceUrl: source.url,
        launch: true
    };

    let params = defaults();
    params.resource = 'job';
    params.data = job;
    private(params, next);
}

module.exports = {
    createJob: createJob,
    fetchJobs: fetchJobs,
    fetchJob: fetchJob,
};