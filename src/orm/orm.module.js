"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrmModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var path_1 = require("path");
var entitiesPath = path_1["default"].join(__dirname, '../../**/*.entity{.ts,.js}');
require('dotenv').config();
var OrmModule = /** @class */ (function () {
    function OrmModule() {
    }
    OrmModule = __decorate([
        (0, common_1.Global)(),
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: process.env.DB_HOST,
                    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : null,
                    username: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    entities: [entitiesPath],
                    synchronize: false,
                    logging: true,
                    timezone: 'Z'
                })
            ],
            exports: [typeorm_1.TypeOrmModule]
        })
    ], OrmModule);
    return OrmModule;
}());
exports.OrmModule = OrmModule;
