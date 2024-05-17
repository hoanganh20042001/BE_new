"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var jwt_1 = require("@nestjs/jwt");
var passport_1 = require("@nestjs/passport");
var typeorm_1 = require("@nestjs/typeorm");
var mail_module_1 = require("../mail/mail.module");
var role_repository_1 = require("../dao/role.repository");
var local_strategy_1 = require("../dto/auth/strategies/local.strategy");
var user_repository_1 = require("../dao/user.repository");
var auth_service_1 = require("../business/auth.service");
var jwt_strategy_1 = require("../dto/auth/strategies/jwt.strategy");
var jwt_refresh_strategy_1 = require("../dto/auth/strategies/jwt-refresh.strategy");
var auth_controller_1 = require("../service /auth.controller");
var user_token_repository_1 = require("../dao/user-token.repository");
require('dotenv').config();
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Global)(),
        (0, common_1.Module)({
            imports: [
                mail_module_1.MailModule,
                typeorm_1.TypeOrmModule.forFeature([
                    user_token_repository_1.UserTokenRepository,
                    user_repository_1.UserRepository,
                    role_repository_1.RoleRepository
                ]),
                passport_1.PassportModule,
                jwt_1.JwtModule.register({
                    secret: process.env.JWT_SECRET_KEY,
                    signOptions: { expiresIn: process.env.JWT_EXPIRED_TOKEN_AFTER }
                }),
                config_1.ConfigModule,
            ],
            providers: [
                {
                    provide: auth_service_1.AuthService,
                    useClass: auth_service_1.AuthService
                },
                local_strategy_1.LocalStrategy,
                jwt_strategy_1.JsonWebTokenStrategy,
                jwt_refresh_strategy_1.JwtRefreshStrategy,
            ],
            controllers: [auth_controller_1.AuthController],
            exports: [auth_service_1.AuthService]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
