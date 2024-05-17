"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var bcrypt_1 = require("bcrypt");
var class_transformer_1 = require("class-transformer");
var messageError_1 = require("../messageError");
var auth_token_output_dto_1 = require("../dto/auth/dto/auth-token-output.dto");
var moment = require('moment');
var AuthService = /** @class */ (function () {
    function AuthService(jwtService, userTokenRepository, userRepository, roleRepository, mailService) {
        this.jwtService = jwtService;
        this.userTokenRepository = userTokenRepository;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.mailService = mailService;
    }
    // private readonly _server: OAuth2Server;
    // get server(): OAuth2Server {
    //   return this._server;
    // }
    //function hash password
    AuthService.prototype.hashPassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, bcrypt_1.hash)(password, 12)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.saveTokenDevice = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, token, expired, listUserTokenOld, newUserToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = data.userId, token = data.token, expired = data.expired;
                        return [4 /*yield*/, this.userTokenRepository.find({ userId: userId })];
                    case 1:
                        listUserTokenOld = _a.sent();
                        return [4 /*yield*/, this.userTokenRepository.create({
                                userId: userId,
                                token: token,
                                expired: expired,
                                isActive: 1
                            })];
                    case 2:
                        newUserToken = _a.sent();
                        return [4 /*yield*/, newUserToken.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.checkPhoneNumber = function (phoneNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var vnf_regex;
            return __generator(this, function (_a) {
                vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                if (vnf_regex.test(phoneNumber) == false) {
                    return [2 /*return*/, false];
                }
                else
                    return [2 /*return*/, true];
                return [2 /*return*/];
            });
        });
    };
    AuthService.prototype.checkEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var filter;
            return __generator(this, function (_a) {
                filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (filter.test(email) == false) {
                    return [2 /*return*/, false];
                }
                else
                    return [2 /*return*/, true];
                return [2 /*return*/];
            });
        });
    };
    AuthService.prototype.verificationCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var characters, code, charactersLength, i;
            return __generator(this, function (_a) {
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                code = '';
                charactersLength = characters.length;
                for (i = 0; i < 6; i++) {
                    code += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return [2 /*return*/, code];
            });
        });
    };
    //create user
    AuthService.prototype.createUser = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var findUserByEmail, newUser, _a, _b, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            email: input.email
                        })];
                    case 1:
                        findUserByEmail = _c.sent();
                        if (findUserByEmail)
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.username_or_identity_or_email_already_exist);
                        return [4 /*yield*/, this.checkPhoneNumber(input.phoneNumber)];
                    case 2:
                        if ((_c.sent()) === false) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.phoneNumber_is_not_format);
                        }
                        return [4 /*yield*/, this.checkEmail(input.email)];
                    case 3:
                        if ((_c.sent()) === false) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.email_is_not_format);
                        }
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 9, , 10]);
                        return [4 /*yield*/, this.userRepository.create(input)];
                    case 5:
                        newUser = _c.sent();
                        _a = newUser;
                        return [4 /*yield*/, this.hashPassword(input.passWord)];
                    case 6:
                        _a.passWord = _c.sent();
                        _b = newUser;
                        return [4 /*yield*/, this.verificationCode()];
                    case 7:
                        _b.code = _c.sent();
                        newUser.isActive = 0;
                        this.mailService.sendNewUser({
                            emailTo: input.email,
                            subject: 'Đăng ký',
                            name: input.fullName,
                            code: newUser.code
                        });
                        return [4 /*yield*/, newUser.save()];
                    case 8: return [2 /*return*/, _c.sent()];
                    case 9:
                        err_1 = _c.sent();
                        throw new common_1.InternalServerErrorException({
                            result: false,
                            message: 'Singup error',
                            data: null,
                            statusCode: 500
                        });
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.confirmation = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var findUser, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.findOne({
                                email: input.email,
                                code: input.code
                            })];
                    case 1:
                        findUser = _a.sent();
                        console.log(findUser);
                        if (!findUser) {
                            throw new common_1.BadRequestException();
                        }
                        findUser.isActive = 1;
                        this.mailService.sendAccountVerification({
                            emailTo: input.email,
                            subject: 'Xác nhận đăng ký tài khoản.'
                        });
                        // const updateUser=await this.userRepository.update(findUser.id, { isActive: 1 });
                        findUser.save();
                        return [2 /*return*/, {
                                status: 200,
                                message: 'Success'
                            }];
                    case 2:
                        err_2 = _a.sent();
                        throw new common_1.InternalServerErrorException({
                            result: false,
                            message: 'Confirmation error',
                            data: null,
                            statusCode: 500
                        });
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getActiveUserToken = function (id, role) {
        return __awaiter(this, void 0, void 0, function () {
            var activeUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userTokenRepository.findOne({
                            userId: id,
                            isActive: 1
                        })];
                    case 1:
                        activeUser = _a.sent();
                        // query.where('ut.userId = :id', { id });
                        // query.andWhere('ut.isActive = 1');
                        return [2 /*return*/, activeUser];
                }
            });
        });
    };
    //function compare password param with user password in database
    AuthService.prototype.comparePassword = function (password, storePasswordHash) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, bcrypt_1.compare)(password, storePasswordHash)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.login = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var email, passWord, user, comparePassword, role, roleString, payload, subject, authToken, dataToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = input.email, passWord = input.passWord;
                        return [4 /*yield*/, this.userRepository.findOne({
                                email: input.email
                            })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.user_not_found);
                        }
                        return [4 /*yield*/, this.comparePassword(passWord, user.passWord)];
                    case 2:
                        comparePassword = _a.sent();
                        if (!comparePassword) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.invalid_password);
                        }
                        return [4 /*yield*/, this.roleRepository.findOne(user.id)];
                    case 3:
                        role = _a.sent();
                        roleString = role.name;
                        payload = {
                            id: user.id,
                            email: email,
                            role: roleString
                        };
                        subject = { sub: user.id };
                        authToken = {
                            refreshToken: this.jwtService.sign(subject, {
                                secret: process.env.JWT_SECRET_KEY,
                                expiresIn: process.env.JWT_EXPIRED_TOKEN_AFTER
                            }),
                            accessToken: this.jwtService.sign(__assign(__assign({}, payload), subject), {
                                expiresIn: process.env.JWT_REFRESH_EXPIRED_TOKEN_AFTER
                            }),
                            user: __assign({}, user)
                        };
                        dataToken = {
                            userId: user.id,
                            token: authToken.accessToken,
                            expired: moment(new Date()).add(process.env.JWT_EXPIRED_TOKEN_AFTER, 'milliseconds').format('x'),
                            isActive: 1
                        };
                        return [4 /*yield*/, this.saveTokenDevice(dataToken)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.AuthTokenOutput, authToken, {
                                excludeExtraneousValues: true
                            })];
                }
            });
        });
    };
    AuthService.prototype.loginAdmin = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var email, passWord, user, comparePassword, role, roleString, payload, subject, authToken, dataToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = input.email, passWord = input.passWord;
                        return [4 /*yield*/, this.userRepository.findOne({
                                email: input.email,
                                roleId: 1
                            })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.user_not_found);
                        }
                        return [4 /*yield*/, this.comparePassword(passWord, user.passWord)];
                    case 2:
                        comparePassword = _a.sent();
                        if (!comparePassword) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.invalid_password);
                        }
                        if (user.isActive == 0) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.is_not_active);
                        }
                        return [4 /*yield*/, this.roleRepository.findOne(user.id)];
                    case 3:
                        role = _a.sent();
                        roleString = role.name;
                        payload = {
                            id: user.id,
                            email: email,
                            role: roleString
                        };
                        subject = { sub: user.id };
                        authToken = {
                            refreshToken: this.jwtService.sign(subject, {
                                secret: process.env.JWT_SECRET_KEY,
                                expiresIn: process.env.JWT_EXPIRED_TOKEN_AFTER
                            }),
                            accessToken: this.jwtService.sign(__assign(__assign({}, payload), subject), {
                                expiresIn: process.env.JWT_REFRESH_EXPIRED_TOKEN_AFTER
                            }),
                            user: __assign({}, user)
                        };
                        dataToken = {
                            userId: user.id,
                            token: authToken.accessToken,
                            expired: moment(new Date()).add(process.env.JWT_EXPIRED_TOKEN_AFTER, 'milliseconds').format('x'),
                            isActive: 1
                        };
                        return [4 /*yield*/, this.saveTokenDevice(dataToken)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.AuthTokenOutput, authToken, {
                                excludeExtraneousValues: true
                            })];
                }
            });
        });
    };
    AuthService.prototype.decodeToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.jwtService.decode(token)];
                }
                catch (error) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
            });
        });
    };
    AuthService.prototype.refreshToken = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!ctx.user.role) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userRepository.findOne(ctx.user.id)];
                    case 1:
                        user = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!user) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.invalid_user_id);
                        }
                        return [2 /*return*/, this.getAuthToken(ctx, user)];
                }
            });
        });
    };
    AuthService.prototype.getAuthToken = function (ctx, user) {
        return __awaiter(this, void 0, void 0, function () {
            var subject, payload, authToken, dataToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subject = { sub: user.id };
                        payload = {
                            username: user.username,
                            sub: user.id
                        };
                        authToken = {
                            refreshToken: this.jwtService.sign(subject, {
                                secret: process.env.JWT_REFRESH_SECRET_KEY,
                                expiresIn: process.env.JWT_REFRESH_EXPIRED_TOKEN_AFTER
                            }),
                            accessToken: this.jwtService.sign(__assign(__assign({}, payload), subject), {
                                expiresIn: process.env.JWT_EXPIRED_TOKEN_AFTER
                            }),
                            user: __assign({}, user)
                        };
                        dataToken = {
                            userId: user.id,
                            token: authToken.accessToken,
                            expired: moment(new Date()).add(process.env.JWT_EXPIRED_TOKEN_AFTER, 'milliseconds').format('x'),
                            isActive: 1
                        };
                        return [4 /*yield*/, this.saveTokenDevice(dataToken)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.AuthTokenOutput, authToken, {
                                excludeExtraneousValues: true
                            })];
                }
            });
        });
    };
    AuthService.prototype.findTokenByUserId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userTokenRepository.findOne({ userId: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.tokenByUser = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var findUserToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userTokenRepository.findOne({
                            token: token
                        })];
                    case 1:
                        findUserToken = _a.sent();
                        return [2 /*return*/, findUserToken];
                }
            });
        });
    };
    AuthService.prototype.logout = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var authToken, userToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userTokenRepository.findOne({
                            token: req.headers.authorization.split('Bearer ')[1]
                        })];
                    case 1:
                        authToken = _a.sent();
                        if (!authToken) {
                            throw new common_1.BadRequestException();
                        }
                        return [4 /*yield*/, this.userTokenRepository.findOne({
                                token: authToken.token
                            })];
                    case 2:
                        userToken = _a.sent();
                        return [4 /*yield*/, this.userTokenRepository.update(userToken.id, { isActive: 0 })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {
                                status: 200,
                                message: 'Success'
                            }];
                }
            });
        });
    };
    AuthService.prototype.authenticate = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var email, passWord, user, comparePassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = input.email, passWord = input.passWord;
                        return [4 /*yield*/, this.userRepository.findOne({
                                email: input.email
                            })];
                    case 1:
                        user = _a.sent();
                        // console.log(user._id);
                        if (!user) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.user_not_found);
                        }
                        return [4 /*yield*/, this.comparePassword(passWord, user.passWord)];
                    case 2:
                        comparePassword = _a.sent();
                        if (!comparePassword) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.invalid_password);
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    AuthService.prototype.changePassword = function (changePasswordDto) {
        return __awaiter(this, void 0, void 0, function () {
            var oldPassword, newPassword, userId, user, comparePassword, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        oldPassword = changePasswordDto.oldPassword, newPassword = changePasswordDto.newPassword, userId = changePasswordDto.userId;
                        return [4 /*yield*/, this.userRepository.findOne({ id: userId })];
                    case 1:
                        user = _b.sent();
                        return [4 /*yield*/, this.comparePassword(oldPassword, user.passWord)];
                    case 2:
                        comparePassword = _b.sent();
                        if (!comparePassword) {
                            return [2 /*return*/, { status: false, message: 'Mật khẩu cũ không đúng!' }];
                        }
                        _a = user;
                        return [4 /*yield*/, this.hashPassword(newPassword)];
                    case 3:
                        _a.passWord = _b.sent();
                        return [4 /*yield*/, user.save()];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, { status: true, message: 'Đổi mật khẩu thành công!' }];
                }
            });
        });
    };
    AuthService.prototype.forgetPassword = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var findUserByEmail, _a, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            email: input.email
                        })];
                    case 1:
                        findUserByEmail = _b.sent();
                        console.log(findUserByEmail);
                        if (!findUserByEmail) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.user_not_found);
                        }
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 5, , 6]);
                        _a = findUserByEmail;
                        return [4 /*yield*/, this.verificationCode()];
                    case 3:
                        _a.forgetPassCode = _b.sent();
                        this.mailService.sendNewPassword({
                            emailTo: input.email,
                            subject: 'Quên mật khẩu',
                            name: findUserByEmail.fullName,
                            code: findUserByEmail.forgetPassCode
                        });
                        return [4 /*yield*/, findUserByEmail.save()];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, { status: 200, message: 'Đã gửi mã đặt lại mật khẩu về email' }];
                    case 5:
                        err_3 = _b.sent();
                        throw new common_1.InternalServerErrorException({
                            result: false,
                            message: 'Forget Password error',
                            data: null,
                            statusCode: 500
                        });
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.confirmationForgetPassword = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var findUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            email: input.email
                        })];
                    case 1:
                        findUser = _a.sent();
                        if (!findUser) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.user_not_found);
                        }
                        if (findUser.forgetPassCode === input.code) {
                            return [2 /*return*/, {
                                    status: 200,
                                    message: 'Success'
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    status: 500,
                                    message: 'Fail'
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.resetPassword = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var findUser, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            email: input.email
                        })];
                    case 1:
                        findUser = _b.sent();
                        if (!findUser) {
                            throw new common_1.BadRequestException(messageError_1.MESSAGE.user_not_found);
                        }
                        if (input.passWord != input.repassWord) {
                            throw new common_1.BadRequestException('reset pass fail');
                        }
                        _a = findUser;
                        return [4 /*yield*/, this.hashPassword(input.passWord)];
                    case 2:
                        _a.passWord = _b.sent();
                        return [4 /*yield*/, findUser.save()];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    AuthService = __decorate([
        (0, common_1.Injectable)()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
