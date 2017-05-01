
var _credentials = null;

function set(credentials) {
    _credentials = credentials;
}

function get() {
    if (_credentials) {
        return _credentials;
    }

    let username = process.env['ahst_username'];
    let token    = process.env['ahst_token'];
    let password = process.env['ahst_password'];

    if (username) {
        if (password) {
            set({ username: username, password: password });
            return _credentials;
        }
        if (token) {
            set({ username: username, token: token });
            return _credentials;
        }
    }

    return null;
}

function load() {
    let envAccess = process.env['ahst_access'];
    if (envAccess) {
        try {
            return JSON.parse(envAccess);
        } catch (err) {
            return null;
        }
    }
    
    return null;
}

function check() {
    return process.env['ahst_access_token'];
}

module.exports = { get: get, set: set, load: load, check: check };