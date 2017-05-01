'use strict';

function whoamiHandler (req, res) {
    var result = {ipaddress: req.headers['x-forwarded-for'],
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers["user-agent"].match(/\(.+\)/gi)[0].slice(1,-1)
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result))
}

module.exports = whoamiHandler;
