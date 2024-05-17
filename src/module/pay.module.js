"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PayModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var discount_repository_1 = require("../dao/discount.repository");
var order_repository_1 = require("../dao/order.repository");
var pay_repository_1 = require("../dao/pay.repository");
var product_repository_1 = require("../dao/product.repository");
var user_repository_1 = require("../dao/user.repository");
var pay_service_1 = require("../business/pay.service");
var mail_service_1 = require("../mail/mail.service");
var pay_controller_1 = require("../service /pay.controller");
var socket_getway_1 = require("../socket/socket.getway");
var PayModule = /** @class */ (function () {
    function PayModule() {
    }
    PayModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([
                    pay_repository_1.PayRepository, product_repository_1.ProductRepository, order_repository_1.OrderRepository, discount_repository_1.DiscountRepository, user_repository_1.UserRepository
                ])],
            controllers: [pay_controller_1.PayController],
            providers: [pay_service_1.PayService, mail_service_1.MailService, socket_getway_1.Gateway]
        })
    ], PayModule);
    return PayModule;
}());
exports.PayModule = PayModule;
