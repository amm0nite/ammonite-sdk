const cloud = require('./clients/cloud.js');
const mc = require('./clients/mc.js');
const backend = require('./clients/backend.js');

module.exports = {
    Cloud: cloud,
    MissionControl: mc,
    Backend: backend,
};