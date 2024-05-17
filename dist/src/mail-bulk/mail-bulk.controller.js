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
exports.MailBulkController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mail_bulk_service_1 = require("./mail-bulk.service");
let MailBulkController = class MailBulkController {
    constructor(mailBulkService) {
        this.mailBulkService = mailBulkService;
    }
    async testSendEmail() {
        return await this.mailBulkService.sendEmail(['nguyenvanhoanganh20042001@gmail.com']);
    }
};
__decorate([
    (0, common_1.Get)('send-email'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MailBulkController.prototype, "testSendEmail", null);
MailBulkController = __decorate([
    (0, swagger_1.ApiTags)('mail-bulk'),
    (0, common_1.Controller)('mail-bulk'),
    __metadata("design:paramtypes", [mail_bulk_service_1.MailBulkService])
], MailBulkController);
exports.MailBulkController = MailBulkController;
//# sourceMappingURL=mail-bulk.controller.js.map