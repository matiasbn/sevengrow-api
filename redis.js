const redis = require('redis');

var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_URL);

client.on('error', function (err) {
    console.log('Redis client error: ' + err);
});

client.on('connect', function () {
    console.log('Redis client connected');
});

module.exports = client;