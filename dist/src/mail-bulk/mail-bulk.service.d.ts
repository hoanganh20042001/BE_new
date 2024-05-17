import { Queue } from 'bullmq';
import 'dotenv/config';
export declare class MailBulkService {
    private mailQueue;
    private readonly logger;
    constructor(mailQueue: Queue);
    sendEmail(input: any): Promise<import("bullmq").Job<any, any, string>>;
    getQueue(): Queue<any, any, string>;
}
