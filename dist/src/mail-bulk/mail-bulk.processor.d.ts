import 'dotenv/config';
import { WorkerHost } from '@nestjs/bullmq';
import { MailerService } from '@nestjs-modules/mailer';
import { Job } from 'bullmq';
export declare class MailBulkProcessor extends WorkerHost {
    private readonly mailerService;
    private readonly logger;
    constructor(mailerService: MailerService);
    onQueueActive(job: Job): void;
    onQueueComplete(job: Job): void;
    onQueueFailed(job: Job): void;
    process(job: Job<{
        input: any[];
    }>): Promise<void>;
    private sendName_code_cccd;
}
