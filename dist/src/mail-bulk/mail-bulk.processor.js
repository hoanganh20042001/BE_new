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
exports.MailBulkProcessor = void 0;
require("dotenv/config");
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const bullmq_2 = require("bullmq");
const constants_1 = require("./constants");
let MailBulkProcessor = class MailBulkProcessor extends bullmq_1.WorkerHost {
    constructor(mailerService) {
        super();
        this.mailerService = mailerService;
        this.logger = new common_1.Logger(this.constructor.name);
    }
    onQueueActive(job) {
        console.log(`Processor 1: Job has been started: ${job.id}`);
    }
    onQueueComplete(job) {
        console.log(`Processor 1: Job has been completed: ${job.id}`);
    }
    onQueueFailed(job) {
        console.log(`Processor 1: Job has been failed: ${job.id}`);
    }
    async process(job) {
        console.log(job.data.input);
        try {
            const inputs = job.data.input;
            if (!Array.isArray(inputs)) {
                await this.sendName_code_cccd(inputs);
            }
            else {
                await Promise.all(inputs.map(async (item) => {
                    await this.sendName_code_cccd(item);
                }));
            }
        }
        catch (error) {
            this.logger.error(`Failed to send confirmation email to '${job.data}'`, error.stack);
            await job.discard();
            throw error;
        }
    }
    async sendName_code_cccd(item) {
        try {
            console.log('item', item);
            this.logger.debug(`Sending email to '${item.email}'`);
            await this.mailerService.sendMail({
                to: item.email,
                from: process.env.MAIL_FROM,
                subject: item.subject,
                template: `./payment-successful.en.hbs`,
                context: {
                    name: item.name,
                    cost: item.cost,
                },
            });
        }
        catch (error) {
            this.logger.error(`Failed to send email to '${item.email}': ${error.message}`);
            throw error;
        }
    }
};
__decorate([
    (0, bullmq_1.OnWorkerEvent)('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bullmq_2.Job]),
    __metadata("design:returntype", void 0)
], MailBulkProcessor.prototype, "onQueueActive", null);
__decorate([
    (0, bullmq_1.OnWorkerEvent)('completed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bullmq_2.Job]),
    __metadata("design:returntype", void 0)
], MailBulkProcessor.prototype, "onQueueComplete", null);
__decorate([
    (0, bullmq_1.OnWorkerEvent)('failed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bullmq_2.Job]),
    __metadata("design:returntype", void 0)
], MailBulkProcessor.prototype, "onQueueFailed", null);
MailBulkProcessor = __decorate([
    (0, bullmq_1.Processor)(constants_1.MAIL_QUEUE, {
        concurrency: 5,
        limiter: {
            max: 1,
            duration: 60000,
        },
    }),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailBulkProcessor);
exports.MailBulkProcessor = MailBulkProcessor;
//# sourceMappingURL=mail-bulk.processor.js.map