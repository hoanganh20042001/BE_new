// "use strict";
// var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
//     var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
//     if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
//     else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
//     return c > 3 && r && Object.defineProperty(target, key, r), r;
// };
// exports.__esModule = true;
// exports.Gateway = void 0;
// var websockets_1 = require("@nestjs/websockets");
// var Gateway = /** @class */ (function () {
//     function Gateway() {
//     }
//     Gateway.prototype.handleConnection = function (client) {
//         console.log("Client connected}");
//     };
//     Gateway.prototype.handleDisconnect = function (client) {
//         console.log("Client disconnected");
//     };
//     // Phương thức để gửi dữ liệu đến client
//     Gateway.prototype.sendToClient = function (event, data) {
//         this.server.emit(event, data);
//     };
//     Gateway.prototype.sendMessage = function (message) {
//         this.server.emit('message', message);
//     };
//     Gateway.prototype.sendToAdmin = function (event, data) {
//         // Gửi thông báo đến admin
//         this.server.emit(event, data);
//     };
//     __decorate([
//         (0, websockets_1.WebSocketServer)()
//     ], Gateway.prototype, "server");
//     Gateway = __decorate([
//         (0, websockets_1.WebSocketGateway)()
//     ], Gateway);
//     return Gateway;
// }());
// exports.Gateway = Gateway;
