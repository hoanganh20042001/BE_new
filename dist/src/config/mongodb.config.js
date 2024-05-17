"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('mongo', () => ({
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/mydb',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
}));
//# sourceMappingURL=mongodb.config.js.map