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
exports.PayService = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("../constants");
var PayService = /** @class */ (function () {
    function PayService(payRepository, orderRepository, productRepository, discountRepository, userRepository, mailService, gateway) {
        this.payRepository = payRepository;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.discountRepository = discountRepository;
        this.userRepository = userRepository;
        this.mailService = mailService;
        this.gateway = gateway;
    }
    PayService.prototype.createPay = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var cost, newPay;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cost = 0;
                        newPay = this.payRepository.create(input);
                        return [4 /*yield*/, newPay.save()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Promise.all(input.orderItems.map(function (orderItem) { return __awaiter(_this, void 0, void 0, function () {
                                var order, product;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.orderRepository.findOne({ id: orderItem.orderId })];
                                        case 1:
                                            order = _a.sent();
                                            return [4 /*yield*/, this.productRepository.findOne({ id: order.productId })];
                                        case 2:
                                            product = _a.sent();
                                            console.log(order);
                                            console.log(product);
                                            if (product.quantity < order.quantity) {
                                                throw new common_1.BadRequestException('Có lwdfgddỗi xảy ra!');
                                            }
                                            if (!order) return [3 /*break*/, 5];
                                            order.payId = newPay.id;
                                            order.status = 2;
                                            return [4 /*yield*/, order.save()];
                                        case 3:
                                            _a.sent();
                                            product.quantity = product.quantity - order.quantity;
                                            product.sold = product.sold + order.quantity;
                                            cost = cost + product.price;
                                            return [4 /*yield*/, product.save()];
                                        case 4:
                                            _a.sent();
                                            return [3 /*break*/, 6];
                                        case 5: throw new common_1.NotFoundException("Order with ID ".concat(orderItem.orderId, " not found"));
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        console.log(cost);
                        newPay.cost = cost;
                        this.gateway.sendToAdmin('newOrder', newPay);
                        return [4 /*yield*/, newPay.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, newPay]; // Trả về khoản thanh toán mới được tạo
                }
            });
        });
    };
    PayService.prototype.listAllPay = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var search, listPay, transformedListPay, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        search = payload.search;
                        return [4 /*yield*/, this.payRepository
                                .createQueryBuilder('p')
                                .select(['p.*',
                                'u.fullName as userName'
                            ])
                                .leftJoin('user', 'u', 'u.id=p.userId')
                                .orderBy('p.date', 'ASC')
                                .getRawMany()];
                    case 1:
                        listPay = _a.sent();
                        if (search) {
                            // Thực hiện tìm kiếm nếu có
                            listPay = listPay.filter(function (item) {
                                return (item.name.includes(search) || item.description.includes(search));
                            });
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Promise.all(listPay.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var order;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.orderRepository
                                                .createQueryBuilder('o')
                                                .select(['o.*',
                                                'p.name as product',
                                                'p.discount as discount',
                                                'p.price as price',
                                                'b.name as brand',
                                                'p.image as image'
                                            ])
                                                .leftJoin('product', 'p', 'p.id=o.productId')
                                                .leftJoin('brand', 'b', 'b.id=p.brandId')
                                                .where('o.payId = :payId', { payId: item.id })
                                                .getRawMany()];
                                        case 1:
                                            order = _a.sent();
                                            return [2 /*return*/, __assign(__assign({}, item), { order: order })];
                                    }
                                });
                            }); }))];
                    case 3:
                        transformedListPay = _a.sent();
                        return [2 /*return*/, transformedListPay]; // Trả về kết quả
                    case 4:
                        error_1 = _a.sent();
                        throw new common_1.BadRequestException('Có lỗi xảy ra!');
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PayService.prototype.listPayByUserId = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, search, listPay, transformedListPay, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = payload.userId, search = payload.search;
                        return [4 /*yield*/, this.payRepository
                                .createQueryBuilder('p')
                                .select(['p.*'])
                                .where('p.userId = :userId', { userId: payload.userId })
                                .orderBy('p.date', 'ASC')
                                .getRawMany()];
                    case 1:
                        listPay = _a.sent();
                        if (search) {
                            // Thực hiện tìm kiếm nếu có
                            listPay = listPay.filter(function (item) {
                                return (item.name.includes(search) || item.description.includes(search));
                            });
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Promise.all(listPay.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var order;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.orderRepository
                                                .createQueryBuilder('o')
                                                .select(['o.*',
                                                'p.name as product',
                                                'p.discount as discount',
                                                'p.price as price',
                                                'b.name as brand',
                                                'p.image as image'
                                            ])
                                                .leftJoin('product', 'p', 'p.id=o.productId')
                                                .leftJoin('brand', 'b', 'b.id=p.brandId')
                                                .where('o.payId = :payId', { payId: item.id })
                                                .getRawMany()];
                                        case 1:
                                            order = _a.sent();
                                            return [2 /*return*/, __assign(__assign({}, item), { order: order })];
                                    }
                                });
                            }); }))];
                    case 3:
                        transformedListPay = _a.sent();
                        return [2 /*return*/, transformedListPay]; // Trả về kết quả
                    case 4:
                        error_2 = _a.sent();
                        throw new common_1.BadRequestException('Có lỗi xảy ra!');
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PayService.prototype.listPayByStatus = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var status, listPay, transformedListPay, error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = payload.status;
                        return [4 /*yield*/, this.payRepository
                                .createQueryBuilder('p')
                                .select(['p.*'])
                                .orderBy('p.date', 'ASC')
                                .getRawMany()];
                    case 1:
                        listPay = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Promise.all(listPay.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var order;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.orderRepository
                                                .createQueryBuilder('o')
                                                .select(['o.*', 'p.name as product', 'p.discount as discount'])
                                                .leftJoin('product', 'p', 'p.id=o.productId')
                                                .where('o.payId = :payId', { payId: item.id })
                                                .getRawMany()];
                                        case 1:
                                            order = _a.sent();
                                            return [2 /*return*/, __assign(__assign({}, item), { order: order })];
                                    }
                                });
                            }); }))];
                    case 3:
                        transformedListPay = _a.sent();
                        return [2 /*return*/, transformedListPay]; // Trả về kết quả
                    case 4:
                        error_3 = _a.sent();
                        throw new common_1.BadRequestException('Có lỗi xảy ra!');
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PayService.prototype.getDetailPay = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var PayId, Pay;
            return __generator(this, function (_a) {
                PayId = payload.PayId;
                Pay = this.productRepository
                    .createQueryBuilder('p')
                    .select(['p.*',
                    'o.quantity as quantity',
                    'p.name as product',
                    'p.price as price',
                    'p.discountedProduct as dicountedProduct',
                    'p.discount as discount'
                ])
                    .leftJoin('order', 'o', 'o.payId=p.id')
                    .where('o.payId = :payId', { payId: payload.PayId })
                    .getRawMany();
                return [2 /*return*/, Pay];
            });
        });
    };
    PayService.prototype.getCost = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var discountId, orderItems, cost, discount, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        discountId = payload.discountId, orderItems = payload.orderItems;
                        cost = 0;
                        return [4 /*yield*/, Promise.all(payload.orderItems.map(function (orderItem) { return __awaiter(_this, void 0, void 0, function () {
                                var order, product;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.orderRepository.findOne({ id: orderItem.orderId })];
                                        case 1:
                                            order = _a.sent();
                                            return [4 /*yield*/, this.productRepository.findOne({ id: order.productId })];
                                        case 2:
                                            product = _a.sent();
                                            if (order) {
                                                cost = cost + product.discountedPrice;
                                            }
                                            else {
                                                throw new common_1.NotFoundException("Order with ID ".concat(orderItem.orderId, " not found"));
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _b.sent();
                        discount = this.discountRepository.findOne({ id: payload.discountId });
                        _a = cost;
                        return [4 /*yield*/, discount];
                    case 2:
                        cost = _a - (_b.sent()).value;
                        return [2 /*return*/, cost];
                }
            });
        });
    };
    PayService.prototype.updatePay = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var findPayById, updatedItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.payRepository.findOne(payload.PayId)];
                    case 1:
                        findPayById = _a.sent();
                        if (!findPayById) {
                            throw new common_1.BadRequestException("Pay_is_not_exist");
                        }
                        updatedItem = __assign(__assign({}, findPayById), payload);
                        return [4 /*yield*/, this.payRepository.save(updatedItem)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PayService.prototype.updateStatusPay = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var findPayById, findUser, discount, products, updatedItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.payRepository.findOne(payload.PayId)];
                    case 1:
                        findPayById = _a.sent();
                        if (!findPayById) {
                            throw new common_1.BadRequestException("Pay_is_not_exist");
                        }
                        return [4 /*yield*/, this.userRepository.findOne({ id: findPayById.userId })];
                    case 2:
                        findUser = _a.sent();
                        return [4 /*yield*/, this.discountRepository.findOne({ id: findPayById.discountId })];
                    case 3:
                        discount = _a.sent();
                        return [4 /*yield*/, this.productRepository
                                .createQueryBuilder('p')
                                .select([
                                'o.quantity as quantity',
                                'p.name as product',
                                'p.price as price',
                                'p.discountedPrice as discountedPrice',
                                'p.discount as discount'
                            ])
                                .leftJoin('order', 'o', 'o.productId = p.id')
                                .where('o.payId = :payId', { payId: payload.PayId })
                                .getRawMany()];
                    case 4:
                        products = _a.sent();
                        console.log(findUser);
                        if (!(payload.status === constants_1.PAY_STATUS.DTT)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.mailService.paymentSuccessful({
                                emailTo: findUser.email,
                                subject: 'Thanh toán hóa đơn thành công',
                                name: findUser.fullName,
                                products: products,
                                value: discount ? discount.value : 0,
                                cost: findPayById.cost,
                                bankName: findPayById.bankName
                            })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        updatedItem = __assign(__assign({}, findPayById), payload);
                        return [4 /*yield*/, this.payRepository.save(updatedItem)];
                    case 7: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PayService.prototype.deletePay = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var PayId, Pay;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        PayId = payload.PayId;
                        return [4 /*yield*/, this.payRepository.findOne(PayId)];
                    case 1:
                        Pay = _a.sent();
                        if (!Pay) {
                            throw new common_1.BadRequestException("Pay_is_not_exist");
                        }
                        return [4 /*yield*/, this.payRepository.remove(Pay)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { status: 200, message: 'Xóa thành công!' }];
                }
            });
        });
    };
    PayService = __decorate([
        (0, common_1.Injectable)()
    ], PayService);
    return PayService;
}());
exports.PayService = PayService;
