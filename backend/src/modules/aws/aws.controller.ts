import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { AwsService } from './aws.service'
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger'
import { FileInterceptor } from '@nestjs/platform-express'

@ApiTags('AWS')
@Controller('/api/aws')
export class AwsController {
  constructor(private awsService: AwsService) {}

  @Post('')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    return await this.awsService.upload(file, 'files')
  }

  @ApiOperation({
    summary: 'Get file',
    description: 'Get file.',
  })
  @Get(':filename')
  async getAudioFile(@Param('filename') file: string) {
    return await this.awsService.getFile(`files/${file}`)
  }
}
