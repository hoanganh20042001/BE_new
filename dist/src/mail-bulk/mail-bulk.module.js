"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailBulkModule = void 0;
require("dotenv/config");
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const mail_bulk_service_1 = require("./mail-bulk.service");
const mail_bulk_processor_1 = require("./mail-bulk.processor");
const mail_bulk_controller_1 = require("./mail-bulk.controller");
let MailBulkModule = class MailBulkModule {
};
MailBulkModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bullmq_1.BullModule.registerQueue({
                name: constants_1.MAIL_QUEUE,
            })
        ],
        controllers: [mail_bulk_controller_1.MailBulkController],
        providers: [mail_bulk_service_1.MailBulkService, mail_bulk_processor_1.MailBulkProcessor],
        exports: [mail_bulk_service_1.MailBulkService]
    })
], MailBulkModule);
exports.MailBulkModule = MailBulkModule;
//# sourceMappingURL=mail-bulk.module.js.map