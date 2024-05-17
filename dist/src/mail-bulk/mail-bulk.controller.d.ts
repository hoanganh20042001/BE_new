import { MailBulkService } from './mail-bulk.service';
export declare class MailBulkController {
    private readonly mailBulkService;
    constructor(mailBulkService: MailBulkService);
    testSendEmail(): Promise<import("bullmq").Job<any, any, string>>;
}
