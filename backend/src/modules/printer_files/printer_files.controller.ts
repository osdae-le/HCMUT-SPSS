import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common'
import { PrinterFilesService } from './printer_files.service'
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreatePrinterFileDTO } from './dto/create-printer-file.dto'
import { PrinterFileResponseDTO } from './dto/printer-file-response.dto'

@ApiTags('PRINTER-FILES')
@Controller('api/printer-files')
export class PrinterFilesController {
  constructor(private readonly printerFilesService: PrinterFilesService) {}

  @ApiOperation({
    summary: 'Get all printer files',
    description: 'Get all printer files.',
  })
  @Get()
  async getAllPrinterFiles() {
    return this.printerFilesService.findAll()
  }

  @ApiOperation({
    summary: 'Create printer file',
    description: 'Create printer file.',
  })
  @ApiBody({ type: CreatePrinterFileDTO })
  @Post()
  async createPrinterFile(
    @Body() printerFile: CreatePrinterFileDTO,
    @Res() res,
  ) {
    const response = new PrinterFileResponseDTO()
    try {
      const result = await this.printerFilesService.createNewPrinterFile(
        printerFile,
      )
      response.data = result
      response.success = true
      response.message = 'Printer file created successfully'

      return res.status(HttpStatus.CREATED).json(response)
    } catch (error) {
      response.success = false
      response.message = error.message
      response.data = null
      
      if (error.status === HttpStatus.NOT_FOUND) {
        return res.status(HttpStatus.NOT_FOUND).json(response)
      } else return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response)
    }
  }
}
