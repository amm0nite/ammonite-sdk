const credentials = require('./lib/credentials.js');
const cloud = require('./clients/cloud.js');
const mc = require('./clients/mc.js');

function configure(params) {
    if (params.username && (params.token || params.password)) {
        let secret = params.token ? 'token' : 'password';
        let creds = { username: params.username };
        creds[secret] = params[secret];
        credentials.set(creds);
    }
}

module.exports = {
    configure: configure,
    cloud: cloud,
    mc: mc
};