"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SocketModule = void 0;
var common_1 = require("@nestjs/common");
var socket_getway_1 = require("./socket.getway");
var socket_controller_1 = require("./socket.controller");
var SocketModule = /** @class */ (function () {
    function SocketModule() {
    }
    SocketModule = __decorate([
        (0, common_1.Module)({
            providers: [socket_getway_1.Gateway],
            controllers: [socket_controller_1.SocketController]
        })
    ], SocketModule);
    return SocketModule;
}());
exports.SocketModule = SocketModule;
