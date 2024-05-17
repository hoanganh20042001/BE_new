"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayService = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("../mail/mail.service");
const pay_repository_1 = require("../dao/pay.repository");
const order_repository_1 = require("../dao/order.repository");
const product_repository_1 = require("../dao/product.repository");
const discount_repository_1 = require("../dao/discount.repository");
const user_repository_1 = require("../dao/user.repository");
const mail_bulk_service_1 = require("../mail-bulk/mail-bulk.service");
const mail_bulk_input_1 = require("../mail-bulk/mail-bulk.input");
let PayService = class PayService {
    constructor(payRepository, orderRepository, productRepository, discountRepository, userRepository, mailService, mailBulkService) {
        this.payRepository = payRepository;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.discountRepository = discountRepository;
        this.userRepository = userRepository;
        this.mailService = mailService;
        this.mailBulkService = mailBulkService;
    }
    async createPay(input) {
        let cost = 0;
        const newPay = this.payRepository.create(input);
        await newPay.save();
        await Promise.all(input.orderItems.map(async (orderItem) => {
            const order = await this.orderRepository.findOne({ id: orderItem.orderId });
            const product = await this.productRepository.findOne({ id: order.productId });
            console.log(order);
            console.log(product);
            if (product.quantity < order.quantity) {
                throw new common_1.BadRequestException('Có lwdfgddỗi xảy ra!');
            }
            if (order) {
                order.payId = newPay.id;
                order.status = 2;
                await order.save();
                product.quantity = product.quantity - order.quantity;
                product.sold = product.sold + order.quantity;
                cost = cost + product.price;
                await product.save();
            }
            else {
                throw new common_1.NotFoundException(`Order with ID ${orderItem.orderId} not found`);
            }
        }));
        console.log(cost);
        newPay.cost = cost;
        await newPay.save();
        const findUser = await this.userRepository.findOne({ id: newPay.userId });
        const inputsend = new mail_bulk_input_1.sendAccountVerificationInput();
        inputsend.cost = cost;
        inputsend.email = findUser.email;
        inputsend.name = findUser.fullName;
        await this.mailBulkService.sendEmail(inputsend);
        return newPay;
    }
    async listAllPay(payload) {
        const { search } = payload;
        let listPay = await this.payRepository
            .createQueryBuilder('p')
            .select(['p.*',
            'u.fullName as userName'
        ])
            .leftJoin('user', 'u', 'u.id=p.userId')
            .orderBy('p.date', 'ASC')
            .getRawMany();
        if (search) {
            listPay = listPay.filter(item => (item.name.includes(search) || item.description.includes(search)));
        }
        try {
            const transformedListPay = await Promise.all(listPay.map(async (item) => {
                const order = await this.orderRepository
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
                    .getRawMany();
                return Object.assign(Object.assign({}, item), { order: order });
            }));
            return transformedListPay;
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listPayByUserId(payload) {
        const { userId, search } = payload;
        let listPay = await this.payRepository
            .createQueryBuilder('p')
            .select(['p.*'])
            .where('p.userId = :userId', { userId: payload.userId })
            .orderBy('p.date', 'ASC')
            .getRawMany();
        if (search) {
            listPay = listPay.filter(item => (item.name.includes(search) || item.description.includes(search)));
        }
        try {
            const transformedListPay = await Promise.all(listPay.map(async (item) => {
                const order = await this.orderRepository
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
                    .getRawMany();
                return Object.assign(Object.assign({}, item), { order: order });
            }));
            return transformedListPay;
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async listPayByStatus(payload) {
        const { status } = payload;
        let listPay = await this.payRepository
            .createQueryBuilder('p')
            .select(['p.*'])
            .orderBy('p.date', 'ASC')
            .getRawMany();
        try {
            const transformedListPay = await Promise.all(listPay.map(async (item) => {
                const order = await this.orderRepository
                    .createQueryBuilder('o')
                    .select(['o.*', 'p.name as product', 'p.discount as discount'])
                    .leftJoin('product', 'p', 'p.id=o.productId')
                    .where('o.payId = :payId', { payId: item.id })
                    .getRawMany();
                return Object.assign(Object.assign({}, item), { order: order });
            }));
            return transformedListPay;
        }
        catch (error) {
            throw new common_1.BadRequestException('Có lỗi xảy ra!');
        }
    }
    async getDetailPay(payload) {
        const { PayId } = payload;
        const Pay = this.productRepository
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
        return Pay;
    }
    async getCost(payload) {
        const { discountId, orderItems } = payload;
        let cost = 0;
        await Promise.all(payload.orderItems.map(async (orderItem) => {
            const order = await this.orderRepository.findOne({ id: orderItem.orderId });
            const product = await this.productRepository.findOne({ id: order.productId });
            if (order) {
                cost = cost + product.discountedPrice;
            }
            else {
                throw new common_1.NotFoundException(`Order with ID ${orderItem.orderId} not found`);
            }
        }));
        const discount = this.discountRepository.findOne({ id: payload.discountId });
        cost = cost - (await discount).value;
        return cost;
    }
    async updatePay(payload) {
        const findPayById = await this.payRepository.findOne(payload.PayId);
        if (!findPayById) {
            throw new common_1.BadRequestException("Pay_is_not_exist");
        }
        const updatedItem = Object.assign(Object.assign({}, findPayById), payload);
        return await this.payRepository.save(updatedItem);
    }
    async updateStatusPay(payload) {
        const findPayById = await this.payRepository.findOne(payload.PayId);
        if (!findPayById) {
            throw new common_1.BadRequestException("Pay_is_not_exist");
        }
        const findUser = await this.userRepository.findOne({ id: findPayById.userId });
        const discount = await this.discountRepository.findOne({ id: findPayById.discountId });
        const products = await this.productRepository
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
            .getRawMany();
        console.log(findUser);
        await this.mailService.paymentSuccessful({
            emailTo: findUser.email,
            subject: 'Thanh toán hóa đơn thành công',
            name: findUser.fullName,
            cost: findPayById.cost,
        });
        const updatedItem = Object.assign(Object.assign({}, findPayById), payload);
        return await this.payRepository.save(updatedItem);
    }
    async deletePay(payload) {
        const { PayId } = payload;
        const Pay = await this.payRepository.findOne(PayId);
        if (!Pay) {
            throw new common_1.BadRequestException("Pay_is_not_exist");
        }
        await this.payRepository.remove(Pay);
        return { status: 200, message: 'Xóa thành công!' };
    }
    async tablePay() {
        let listPay = await this.payRepository
            .createQueryBuilder('p')
            .select('DATE(p.createdAt) as day')
            .addSelect('SUM(p.cost) as totalCost')
            .addSelect('COUNT(p.id) as totalPay')
            .groupBy('day')
            .getRawMany();
        return listPay;
    }
    catch(error) {
        throw new common_1.BadRequestException('Có lỗi xảy ra!');
    }
};
PayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pay_repository_1.PayRepository,
        order_repository_1.OrderRepository,
        product_repository_1.ProductRepository,
        discount_repository_1.DiscountRepository,
        user_repository_1.UserRepository,
        mail_service_1.MailService,
        mail_bulk_service_1.MailBulkService])
], PayService);
exports.PayService = PayService;
//# sourceMappingURL=pay.service.js.map