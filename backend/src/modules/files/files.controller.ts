import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger'
import { FilesService } from './files.service'
import { CreateFileDTO } from './dto/create-file.dto'
import { FileResponseDTO } from './dto/file-response.dto'

@ApiTags('FILES')
@Controller('api/files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @ApiOperation({
    summary: 'Get all files',
    description: 'Get all files.',
  })
  @Get()
  async getAllFiles(@Res() res) {
    const response = new FileResponseDTO()
    try {
      const data = await this.filesService.findAll()
      
      response.data = data
      response.success = true
      response.message = 'Files fetched successfully'

      return res.status(HttpStatus.OK).json(response)
    } catch (error) {
      response.data = null
      response.success = false
      response.message = error.message

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response)
    }
  }

  @ApiOperation({
    summary: 'Create file',
    description: 'Create file.',
  })
  @ApiBody({ type: CreateFileDTO })
  @Post()
  async createFile(@Body() file: CreateFileDTO, @Res() res) {
    const response = new FileResponseDTO()
    try {
      const data = await this.filesService.createNewFile(file)
      response.data = data
      response.success = true
      response.message = 'File created successfully'
      return res.status(HttpStatus.CREATED).json(response)
    } catch (error) {
      response.data = null
      response.success = false
      response.message = error.message

      if (error.status === HttpStatus.NOT_FOUND) {
        return res.status(HttpStatus.NOT_FOUND).json(response)
      } else if (error.status === HttpStatus.CONFLICT) {
        return res.status(HttpStatus.CONFLICT).json(response)
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response)
      }
    }
  }
}
