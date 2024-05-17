"use strict";
exports.__esModule = true;
var config_1 = require("@nestjs/config");
exports["default"] = (0, config_1.registerAs)('mongo', function () { return ({
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/mydb',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}); });
