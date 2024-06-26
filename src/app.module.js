"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var orm_1 = require("./orm");
var role_module_1 = require("../src/module/role.module");
var mail_module_1 = require("./mail/mail.module");
var backup_module_1 = require("./backup/backup.module");
var minio_module_1 = require("./minio/minio.module");
var config_1 = require("@nestjs/config");
var backup_config_1 = require("./config/backup.config");
var mongo_module_1 = require("./mongo/mongo.module");
var mail_config_1 = require("./config/mail.config");
var mongodb_config_1 = require("./config/mongodb.config");
var mongoose_1 = require("@nestjs/mongoose");
var category_module_1 = require("./module/category.module");
var brand_module_1 = require("./module/brand.module");
var user_module_1 = require("./module/user.module");
var product_module_1 = require("./module/product.module");
var news_module_1 = require("./module/news.module");
var discount_module_1 = require("./module/discount.module");
var type_module_1 = require("./module/type.module");
var order_module_1 = require("./module/order.module");
var pay_module_1 = require("./module/pay.module");
var review_module_1 = require("./module/review.module");
var auth_module_1 = require("./module/auth.module");
var address_module_1 = require("./module/address.module");
var user_token_module_1 = require("./module/user-token.module");
var socket_module_1 = require("./socket/socket.module");
require('dotenv').config();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    envFilePath: ['.env'],
                    load: [mail_config_1["default"], backup_config_1.getBackupConfig, mongodb_config_1["default"]],
                    cache: true
                }),
                mongoose_1.MongooseModule.forRootAsync({
                    imports: [config_1.ConfigModule],
                    useFactory: function (configService) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, ({
                                    uri: configService.get('mongo.uri')
                                })];
                        });
                    }); },
                    inject: [config_1.ConfigService]
                }),
                orm_1.OrmModule,
                user_module_1.UserModule,
                user_token_module_1.UserTokenModule,
                role_module_1.RoleModule,
                auth_module_1.AuthModule,
                category_module_1.CategoryModule,
                product_module_1.ProductModule,
                news_module_1.NewsModule,
                discount_module_1.DiscountModule,
                type_module_1.TypeModule,
                mail_module_1.MailModule,
                brand_module_1.BrandModule,
                order_module_1.OrderModule,
                pay_module_1.PayModule,
                review_module_1.ReviewModule,
                address_module_1.AddressModule,
                backup_module_1.BackupModule,
                minio_module_1.MinioModule,
                mongo_module_1.MongoModule,
                socket_module_1.SocketModule,],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
