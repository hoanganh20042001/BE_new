import 'dotenv/config'
import { BullModule } from '@nestjs/bullmq'
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as AWS from 'aws-sdk'

import { MAIL_QUEUE } from './constants';
// import { MailBulkController } from './mail-bulk.controller';
// import { MailBulkProcessor } from './mail-bulk.processor';
import { MailBulkService } from './mail-bulk.service';
import { MailBulkProcessor } from './mail-bulk.processor';
import { MailBulkController } from './mail-bulk.controller';

@Module({
  imports: [
    // MailerModule.forRootAsync({
    //   useFactory: () => ({
    //     transport: {
    //       SES: new AWS.SES({
    //         accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
    //         secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
    //         region: process.env.AWS_SES_REGION,
    //         sslEnabled: false, // Disable SSL validation
    //       }),
    //       tls: {
    //         rejectUnauthorized: false // this did the trick
    //       }
    //       // secure: false, // TODO - Upgrade later with STARTTLS
    //       // ignoreTLS: true,
    //     },
    //     defaults: {
    //       from: `"8Layer Test" <${process.env.MAILER_SOURCE}>`,
    //     },
    //     template: {
    //       dir: `${process.cwd()}/src/mail/templates`,
    //       adapter: new HandlebarsAdapter(), // or  new PugAdapter()
    //       options: {
    //         strict: true,
    //       },
    //     },
    //   })
    // }),
    BullModule.registerQueue({
      name: MAIL_QUEUE,
    })
  ],
  controllers: [MailBulkController],
  providers: [MailBulkService, MailBulkProcessor],
  exports: [MailBulkService]
})
export class MailBulkModule { }
