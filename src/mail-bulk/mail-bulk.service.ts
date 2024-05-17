import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bullmq';
const { setQueues, BullMQAdapter, BullAdapter } = require('bull-board')
import 'dotenv/config'

import { ACCOUNT_VERIFICATION, MAIL_QUEUE, SEND_EMAIL } from './constants';
import { IEmail } from './interfaces/emai.interface';
// import { newUserInput } from './mail_bulk.input';

@Injectable()
export class MailBulkService {
  private readonly logger = new Logger(this.constructor.name)

  constructor(
    @InjectQueue(MAIL_QUEUE) private mailQueue: Queue,
  ) {
 
      setQueues([new BullAdapter(this.mailQueue)]);
  
  }

  /** Send email */
  async sendEmail(input: any) {
    console.log(input)
    // try {
      if (!input) {
        return null
      }
      let notify;
      if (!Array.isArray(input)) {
        notify = input.notify;
      } else {
        notify = input[0].notify;
      }

      // Thêm công việc vào hàng đợi
      const job = await this.mailQueue.add('test', { input });
      // console.log(job)
      return job;

    // } catch (error) {
    //   console.log(error)
    //   this.logger.error(`Error queueing send_email to email address ${input}`)
    //   return null
    // }
  }

  getQueue() {
    return this.mailQueue
  }
}
