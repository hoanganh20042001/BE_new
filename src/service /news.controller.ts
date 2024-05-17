import { BadRequestException, Body, Controller, Get, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/dto/auth/guards/auth.guard';

import { getDetailNewsDto, listAllNewsDto } from '../dto/news/list-all-news-dto.dto';
import { addLikeDto, addViewDto, createNewsDto, updateNewsDto } from '../dto/news/news-dto.dto';
import { NewsService } from '../business/news.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinioService } from 'src/minio/minio.service';

@ApiTags('news')
@Controller('news')
export class NewsController {
  constructor(
    private readonly NewsService: NewsService,
    private readonly minioService: MinioService
  ) { }

 
  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'create',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'File to upload'
        },
        title: {
          type: 'string',
          description: 'Name'
        },
        // view: {
        //   type: 'number',
        //   description: 'view'
        // },
        // liked: {
        //   type: 'number',
        //   description: 'liked'
        // },
        content: {
          type: 'string',
          description: 'content'
        }
      },
      required: ['file']
    }
  })
  @UseInterceptors(FileInterceptor('file'))
  @Post('create')
  async createProduct(@UploadedFile() file: Express.Multer.File,
    @Body() payload: createNewsDto // Thay thế bằng DTO chính xác của bạn
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const bucketName = 'news';
    const objectName = file.originalname;
    const url = await this.minioService.uploadFile(bucketName, objectName, file.buffer, 'image/jpeg');

    return this.NewsService.createNew(payload, url);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('add-like')
  async addLike(
    @Body() payload: addLikeDto
  ) {
    return this.NewsService.addLike(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('add-view')
  async addView(
    @Body() payload: addViewDto
  ) {
    return this.NewsService.addView(payload);
  }
  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('list-all')
  async listAllNews(@Query() payload: listAllNewsDto) {
    return this.NewsService.listAllNews(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Get('detail')
  async getDetailNews(@Query() payload: getDetailNewsDto) {
    return this.NewsService.getDetailNews(payload);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('update')
  async updateNews(
    @Body() payload: updateNewsDto
  ) {
    return await this.NewsService.updateNews(
      payload
    );
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('delete')
  async deleteNews(@Query() payload: getDetailNewsDto) {
    return this.NewsService.deleteNews(payload);
  }
}
