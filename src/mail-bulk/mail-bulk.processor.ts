import 'dotenv/config'

import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'
import { Job } from 'bullmq';
import { isEthereumAddress } from 'class-validator';
// import { NOTIFICATION } from 'src/constants';

import { ACCOUNT_VERIFICATION, MAIL_QUEUE, SEND_EMAIL } from './constants'
// import { newUserInput } from './mail_bulk.input';


@Processor(MAIL_QUEUE, {
  concurrency: 5,
  // lockDuration: 3000,
  limiter: {
    max: 1,
    duration: 60000,
  },
})
export class MailBulkProcessor extends WorkerHost {
  private readonly logger = new Logger(this.constructor.name)

  constructor(
    private readonly mailerService: MailerService,
  ) {
    super();
  }

  @OnWorkerEvent('active')
  onQueueActive(job: Job) {
    console.log(`Processor 1: Job has been started: ${job.id}`);
  }

  @OnWorkerEvent('completed')
  onQueueComplete(job: Job) {
    console.log(`Processor 1: Job has been completed: ${job.id}`);
  }

  @OnWorkerEvent('failed')
  onQueueFailed(job: Job) {
    console.log(`Processor 1: Job has been failed: ${job.id}`);
  }

  async process(job: Job<{ input: any[] }>) {
    console.log(job.data.input)
    // this.logger.debug(`Sending email to '${job.data}'`)
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
    } catch (error) {
      this.logger.error(`Failed to send confirmation email to '${job.data}'`, error.stack);
      await job.discard()
      throw error
    }

  }

  private async sendName_code_cccd(item: any) {
    try {
      console.log('item', item)
      this.logger.debug(`Sending email to '${item}'`);
      await this.mailerService.sendMail({
        to: item,
        from: process.env.MAIL_FROM,
        subject: 'test',
        template: `./payment-successful.en.hbs`,
        context: {
          name: 'tese',
          cost: 1
        },
      });
    } catch (error) {
      this.logger.error(`Failed to send email to '${item.email}': ${error.message}`);
      throw error;
    }
  }


}
