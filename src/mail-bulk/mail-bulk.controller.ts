import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { MailBulkService } from './mail-bulk.service';

@ApiTags('mail-bulk')
@Controller('mail-bulk')
export class MailBulkController {
  constructor(
    private readonly mailBulkService: MailBulkService
  ) { }

  @Get('send-email')
  async testSendEmail() {
    return await this.mailBulkService.sendEmail(['nguyenvanhoanganh20042001@gmail.com'])
  }
}
